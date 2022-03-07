
import { useState } from 'react';
import './App.css';


// const style = {
//   buttonStyle: {
//     color: "red",
//     backgroundColor: "black",
//     padding: "25 25 25 25",
//   },
// };

function App() {
  const [count, setCount] = useState(5);

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div> 
  );
}

export default App;
