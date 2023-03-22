import React, { useState } from 'react';
import './App.css';

function App() {

  const [open, setOpen] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setOpen(true)} className='popup-btn'>click</button>
        <div className={`window animated ${open ? 'show': ''}`}>
         <p className='hi'>hi!</p>
          <div onClick={() => setOpen(false)} className='cross'>
            <p className='top'></p>
            <p className='bottom'></p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
