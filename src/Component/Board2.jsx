import React, { useEffect, useState } from 'react';
import Card from './Card';
import "./Board.css";

const Board2 = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [sortType, setSortType] = useState('Priority'); 

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, []);

  const groupAndSortTickets = () => {
    const groupedTickets = {
      4: [],
      3: [],
      2: [],
      1: [],
      0: [],
    };

    tickets.forEach((ticket) => {
      const user = users.find((user) => user.id === ticket.userId);
      ticket.userName = user ? user.name : 'Unknown User';

      groupedTickets[ticket.priority].push(ticket);
    });

    // Sorting logic for Priority
    for (let priority in groupedTickets) {
      if (sortType === 'Priority') {
        groupedTickets[priority].sort((a, b) => b.priority - a.priority);
      } else if (sortType === 'Title') {
        groupedTickets[priority].sort((a, b) => a.title.localeCompare(b.title));
      }
    }

    return groupedTickets;
  };

  const groupedAndSortedTickets = groupAndSortTickets();

  const handleSortChange = (newSortType) => {
    setSortType(newSortType);
  };

  return (
    <div>
      <div className="sort-options">
        <button onClick={() => handleSortChange('Priority')}>Sort by Priority</button>
        <button onClick={() => handleSortChange('Title')}>Sort by Title</button>
      </div>
      <div className="board1">
      {Object.keys(groupedAndSortedTickets).map((priority) => (
        <div key={priority}>
          <h2>
            {priority === '0'
              ? 'No priority (Priority level 0)'
              : `${
                  priority === '4'
                    ? 'Urgent'
                    : priority === '3'
                    ? 'High'
                    : priority === '2'
                    ? 'Medium'
                    : 'Low'
                } (Priority level ${priority})`}
          </h2>
          {groupedAndSortedTickets[priority].map((ticket) => (
            <Card
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              userId={ticket.userId}
              tag={ticket.tag}
              imgUrl={ticket.userId}
            />
          ))}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Board2;
