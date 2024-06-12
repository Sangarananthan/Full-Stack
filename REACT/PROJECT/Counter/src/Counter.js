import { useReducer } from "react";
import "./style.css";
const Counter = () => {
  // Initial State
  const initialState = {
    count: 0,
  };

  //   Reducer Function
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
        };
      case "decrement":
        return {
          count: state.count - 1,
        };
      default: {
        throw new Error("invalid operation");
      }
    }
  };

  //   Instance
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="container">
        <h1>{state.count}</h1>
      </div>
      <section className="btn-container">
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </section>
    </>
  );
};

export default Counter;
