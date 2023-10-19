import React, { useEffect, useState } from 'react';
import Card from './Card';
import "./Board.css";

const Board3 = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, []);
 
  const groupAndSortTickets = () => {
  const groupedTickets = [];

  tickets.forEach((ticket) => {
    const user = users.find((user) => user.id === ticket.userId);
    ticket.userName = user ? user.name : 'Unknown User';

    const existingGroup = groupedTickets.find((group) => group.user.id === user.id);

    if (!existingGroup) {
      groupedTickets.push({
        user,
        tickets: [ticket],
      });
    } else {
      existingGroup.tickets.push(ticket);
    }
  });

  return groupedTickets;
};

  const groupedAndSortedTickets = groupAndSortTickets();
  

  return (
    <div className="board1">
      {Object.values(groupedAndSortedTickets).map((group) => (
        <div key={group.user.id}>
          <h2>{group.user.name}</h2>
          {group.tickets.map((ticket) => (
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
  );
};

export default Board3;
