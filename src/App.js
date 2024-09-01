import React from 'react';
import './App.css';

function App() {
  const handleButtonClick = () => {
    window.location.href = 'https://script.google.com/a/~/macros/s/AKfycbxYrCO_tTOaeYQ_F_c-zQnnow59BbvJieJF-sGkS7w4viu1EphpEeGorPuZSoInzLzU/exec';
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Saraswathi Technical Institute</h1>
        <h3>Final Examination Results</h3>
        <p className="animated-text">Click to view your results</p>
        <br></br>
        <br></br>
        <button className="animated-button" onClick={handleButtonClick}>
          Click Here
        </button>
        <br></br>
        <br></br>
        <p className="admin-info">Admin: <b>Akash S</b>, 8220093377</p>
      </div>
    </div>
  );
}

export default App;
