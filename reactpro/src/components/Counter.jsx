import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); //sets the value of the count variable to be zero
  const [incrementBy, setIncrementBy] = useState(2); //sets the value of the count variable to be 2
  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function increaseIncrement() {
    setIncrementBy(incrementBy + 3);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy - 3);
  }
  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing the value by:{incrementBy}</h1>
      <button onClick={increaseIncrement}>Increment By</button>
      <button onClick={decreaseIncrement}>Decrement By</button>
    </div>
  );
}
