import React, { useState } from 'react';
import './Info.css';

const Info = ({ userName, userId, available }) => {
  const [isInfoVisible, setInfoVisible] = useState(true);

  const handleClose = () => {
    setInfoVisible(false);
  };

  return (
    isInfoVisible && (
      <div className="info-box">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h2>User Information</h2>
        <div>
          <p><strong>User Name:</strong> {userName}</p>
          <p><strong>User ID:</strong> {userId}</p>
          <p><strong>Available:</strong> {available ? 'Yes' : 'No'}</p>
        </div>
      </div>
    )
  );
}

export default Info;

