import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("user click");
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>text</p>
        <p>hodnota {count}</p>
          <div>
            <button onClick={handleClick}>+</button>
          </div>
      </header>
    </div>
  );
}

export default App;
