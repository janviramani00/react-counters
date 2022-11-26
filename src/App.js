import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(0);

  const increase = () => {
    setCounter(counter + parseInt(text))
  }

  const decrease = () => {
    setCounter(counter - text)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }


  return (
    <div className="App" style={{ 'textAlign': 'center' }}>
      <h1>Counter</h1>
      <span style={{ 'color': counter >= 100 ? 'green' : counter < 0 ? 'red' : 'black' }}>{counter}</span>
      <br></br>
      <br></br>
      <button onClick={increase}>+</button>
      <input onChange={handleChange} value={text}></input>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
