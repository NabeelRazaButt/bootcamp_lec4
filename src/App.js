import React, { useState } from 'react';
import Message from './Message';
import './App.css';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter = {count}/>
      <button onClick={() => setCount(++count)}>Change Value</button>
      <button onClick={() =>setMorning(!isMorning)}>Update Day </button>
    </div>
  );
}

export default App;
