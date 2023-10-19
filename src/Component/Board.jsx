import React, { useEffect, useState } from 'react';
import CardGroup from './CardGroup';
import "./Board.css";

function Board() {
  const [data, setData] = useState(null);
  const [sortType, setSortType] = useState('Priority'); 

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const groupedTickets = data.tickets.reduce((groups, ticket) => {
    const { status } = ticket;
    if (!groups[status]) groups[status] = [];
    groups[status].push(ticket);
    return groups;
  }, {});
  
  const handleSortChange = (newSortType) => {
    setSortType(newSortType);
  };

  if (sortType === 'Status') {
    for (let status in groupedTickets) {
      groupedTickets[status].sort((a, b) => a.title.localeCompare(b.title));
    }
  } else if (sortType === 'Priority') {
    for (let status in groupedTickets) {
      groupedTickets[status].sort((a, b) => b.priority - a.priority);
    }
  }

  return (
    <div>
      <div className="sort-options">
        <button onClick={() => handleSortChange('Priority')}>Sort by Priority</button>
        <button onClick={() => handleSortChange('Title')}>Sort by Title</button>
      </div>
      <div className="board1">
      {Object.keys(groupedTickets).map((status) => (
        <CardGroup key={status} status={status} tickets={groupedTickets[status] || []} />
      ))}
      </div>
    </div>
  );
}

export default Board;
