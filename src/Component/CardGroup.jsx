import React from 'react';
import Card from './Card';
import "./CardGroup.css";

function CardGroup({ status, tickets }) {
  return (
    <div className={`card-group ${status.toLowerCase().replace(' ', '-')}`}>
      <h2>{status} ({tickets.length})</h2>
      <div className="card-container">
        {tickets.map((ticket) => (
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
    </div>
  );
}

export default CardGroup;


