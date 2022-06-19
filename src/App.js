import { useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState(0);
  const handleIncrement = () => {
    setTemp(temp + 1);
  }
  const handleDecrement = () => {
    setTemp(temp - 1);
  }
  return (
    <div className="App">
      <div className="container">
      <div className="tem">
          <h2>Temparature Control App</h2>
          <div>
            <div className='degree'>
              <h2>{ temp} </h2>
            </div>
            <div className='btn'>
            <button onClick={()=>handleIncrement()}>+</button>
              <button onClick={()=>handleDecrement()}>-</button>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
