import React, { useState } from 'react';
import './App.css';

function App() {

  const [open, setOpen] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setOpen(true)} className='popup-btn'>click</button>
        <div className={`window ${open ? 'show': ''}`}>

        </div>
      </header>
    </div>
  );
}

export default App;
