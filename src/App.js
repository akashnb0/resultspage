import React from 'react';
import './App.css';
import sindhujaImage from './assets/sindhuja.jpg';
import rakeshImage from './assets/rakeshh.jpg';
import manishaImage from './assets/manisha.jpg';

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
        {/* Added Toppers Section */}
        <h3>Congratulations to our Toppers</h3>
        <div className="toppers-container">
          <div className="topper">
            <img src={sindhujaImage} alt="Sindhuja D" className="topper-image" />
            <p><b>Sindhuja D</b></p>
            <p>Rank 1</p>
          </div>
          <div className="topper">
            <img src={rakeshImage} alt="Rakesh K" className="topper-image" />
            <p><b>Rakesh K</b></p>
            <p>Rank 2</p>
          </div>
          <div className="topper">
            <img src={manishaImage} alt="Manisha S" className="topper-image" />
            <p><b>anisha S</b></p>
            <p>Rank 3</p>
          </div>
        </div>
        {/* End of Toppers Section */}
        <p className="admin-info">Admin: <b>Akash S</b>, 8220093377</p>
      </div>
    </div>
  );
}

export default App;
