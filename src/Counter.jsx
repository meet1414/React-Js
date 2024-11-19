import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(Math.max(count - 1, 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className='counter-container'>
      <p className='counter-display'>Counter : {count}</p>
      <button className='increment-button' onClick={increment}>Increment</button>
      <button className='decrement-button' onClick={decrement}>Decrement</button>
      <button className='reset-button' onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;

