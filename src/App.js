import { useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState(0);
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
              <button className='increment'>+</button>
              <button className='decrement'>-</button>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
