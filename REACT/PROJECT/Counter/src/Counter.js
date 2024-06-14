import { useEffect, useReducer, useState } from "react";
import "./style.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    const value = localStorage.getItem("count");
    if (value !== null) {
      setCount(Number(value));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <>
      <div className="container">
        <h1>{count}</h1>
      </div>
      <section className="btn-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </section>
    </>
  );
};

export default Counter;
