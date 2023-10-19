import React, { useState } from 'react';
import Nav from './Component/Nav';
import Board3 from './Component/Board3';
import Board2 from './Component/Board2';
import Board from './Component/Board';

function App() {
  const [selectedData, setSelectedData] = useState('');

  const renderSelectedComponent = () => {
    if (selectedData === 'User Name') {
      return <Board3 />;
    } else if (selectedData === 'Priority') {
      return <Board2 />;
    } else {
      return <Board />;
    }
  };

  return (
    <div>
      <Nav onDataSelected={setSelectedData} />
      {renderSelectedComponent()}
    </div>
  );
}

export default App;

