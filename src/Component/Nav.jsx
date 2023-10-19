import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = ({ onDataSelected }) => {
  const [data, setData] = useState('User Name');

  const options = ['User Name', 'Status', 'Priority'];

  const onOptionChangeHandler = (event) => {
    const selectedData = event.target.value;
    setData(selectedData);
    onDataSelected(selectedData);

    localStorage.setItem('selectedData', selectedData);
  };

  useEffect(() => {
    const savedSelectedData = localStorage.getItem('selectedData');
    if (savedSelectedData) {
      setData(savedSelectedData);
      onDataSelected(savedSelectedData);
    }
  }, [onDataSelected]);

  return (
    <div className="nav">
      <h2>
        <strong>Kanban</strong> Board
      </h2>
      <div className="display">
        <label htmlFor="option" id="dl">
          Display :{' '}
        </label>
        <select onChange={onOptionChangeHandler} id="dropdown" value={data}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Nav;

