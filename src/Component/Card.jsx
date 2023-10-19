import React, { useState } from 'react';
import "./Card.css";
import i1 from "../assets/qimg6.jpg";
import i2 from "../assets/qimg1.jpg";
import i3 from "../assets/qimg5.jpg";
import i4 from "../assets/qimg3.jpg";
import i5 from "../assets/qimg4.jpg";
import './Card.css';
import Info from './Info'; 

const Card = ({ id, title, tag, imgUrl }) => {
  const imageMap = {
    'usr-1': i1,
    'usr-2': i2,
    'usr-3': i3,
    'usr-4': i4,
    'usr-5': i5,
  };

  const imageSrc = imageMap[imgUrl] || i2;
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="card">
      <div className="user">
        <h4>{id}</h4>
        <img src={imageSrc} alt="user_icon" className="img" />
      </div>
      <h3 className="title">{title}</h3>
      <div className="user-info">
        <button className="info_btn" onClick={handleInfoClick}>
          !
        </button>
        <h4>#{tag}</h4>
      </div>
      {showInfo && (
        <Info 
        userName={imgUrl} 
        userId={id} 
        />
      )}
    </div>
  );
}

export default Card;
