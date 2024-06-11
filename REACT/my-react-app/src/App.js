// CLASS BASED BASED COMPONENT

// import { Component } from "react";
// class App extends Component {
//   render() {
//     return <h1>Hello world</h1>;
//   }
// }

// FUNCTION BASED COMPONENT AND IMPORTING OTHER COMPONENT

// import Greatings from "./Greatings";
// const App = () => {
//   return <Greatings></Greatings>;
// };

// EXPRESSIONS
// const App = () => {
//   const myName = "Sangar";
//   const multiply = (a, b) => a * b;
//   const superClass = "not-simple-class";

//   return (
//     <>
//       <h1>{myName}</h1>
//       <h3>2*4 = {multiply(2, 4)}</h3>
//       <p className={superClass}>hi</p>
//     </>
//   );
// };

// LISTS
// const App = () => {
// EXAMPLE 1
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// return (
//   <>
//     {numbers.map((num) => (
//       <ul key={num}>
//         <li>{num}</li>
//       </ul>
//     ))}
//   </>
// );

// EXAMPLE 2
//   const userInfo = [
//     {
//       username: "john_doe",
//       email: "john.doe@example.com",
//       location: "USA",
//     },
//     {
//       username: "jane_smith",
//       email: "jane.smith@example.com",
//       location: "Canada",
//     },
//     {
//       username: "sam_brown",
//       email: "sam.brown@example.com",
//       location: "Australia",
//     },
//     {
//       username: "linda_jones",
//       email: "linda.jones@example.com",
//       location: "UK",
//     },
//     {
//       username: "alex_wilson",
//       email: "alex.wilson@example.com",
//       location: "Germany",
//     },
//     {
//       username: "chris_lee",
//       email: "chris.lee@example.com",
//       location: "South Korea",
//     },
//   ];
//   return (
//     <>
//       {userInfo.map((user) => (
//         <ul key={Math.random() * 10}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </>
//   );
// };

// PROPS
// import User from "./User";
// const App = () => {
//   return (
//     <User
//       img="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
//       name="reptile"
//       age={18}
//       isMarried={false}
//       hobbies={["eat", "code", "sleep"]}
//     >
//       {/* CHILDREN */}
//       <h1>Hi there this is rambo🔫</h1>
//     </User>
//   );
// };

// CONDITIONAL RENDERING
// const ValidPassword = () => <h1>Valid Password Succesfull Login!...</h1>;
// const InValidPassword = () => <h1>InValid Password...</h1>;
// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword></ValidPassword>;
//   } else {
//     return <InValidPassword></InValidPassword>;
//   }
// };
// const App = () => {
//   return <Password isValid={false}></Password>;
// };

// AND OPERATOR

// const Cart = () => {
//   const items = [
//     "wired buds",
//     "earphone",
//     "smart phone ",
//     "tablet",
//     "laptop",
//     "Mi Smart Watch",
//   ];
//   return (
//     <>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 ? (
//         <>
//           <h1>You have {items.length} items in Your cart</h1>
//           <h2>Products 👇</h2>
//           {items.map((item, index) => (
//             <ul key={index}>
//               <li>{item}</li>
//             </ul>
//           ))}
//         </>
//       ) : (
//         <h1>Your Cart Is Empty</h1>
//       )}
//     </>
//   );
// };
// const App = () => {
//   return (
//     <>
//       <Cart></Cart>
//     </>
//   );
// };

// STYLES
// import "./index.css";
// const App = () => {
// inline

// const s = {
//   color: "white",
//   backgroundColor: "crimson",
//   padding: "10px",
// };
// return (
//   <>
//     <h1
//       style={{
//         color: s.color,
//         backgroundColor: s.backgroundColor,
//         padding: s.padding,
//       }}
//     >
//       Hello I'm REACT
//     </h1>
//   </>
// );

//   return (
//     <>
//       <h1>Hello I am REACT</h1>
//     </>
//   );
// };

// EVENT HANDLER
// const Button = () => {
//   const handleClick = (a, b) => {
//     console.log(a + b);
//   };
//   return <button onClick={handleClick(2, 3)}>Click me</button>;
// };
// const App = () => {
//   return (
//     <>
//       <Button />
//     </>
//   );
// };

// STATE

// useState - Example 1
// import { useState } from "react";
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </>
//   );
// };
// const App = () => {
//   return <Counter />;
// };

// Example 2

// const App = () => {
//   const [value, setvalue] = useState("");
//   const [item, setitem] = useState([]);
//   const addItem = () => {
//     setitem([...item, value]);
//     setvalue("");
//   };
//   const removeitem = () => {
//     setitem(item.filter((item) => item !== value));
//     setvalue("");
//   };

//   const clearlist = () => {
//     alert("You wish to Clear Cart");
//     setitem([]);
//   };
//   return (
//     <>
//       <label htmlFor="item"></label>
//       <input
//         id="item"
//         value={value}
//         onChange={(e) => setvalue(e.target.value)}
//       ></input>
//       <button onClick={addItem}>Add</button>
//       <button onClick={removeitem}>remove</button>
//       <button onClick={clearlist}>clear</button>
//       {item.length ? (
//         <h1>You have {item.length} items in your cart 🛒</h1>
//       ) : (
//         <h1>Your Cart is Empty 🛒</h1>
//       )}
//       {item.map((item, index) => (
//         <ul key={index}>
//           <li>{item}</li>
//         </ul>
//       ))}
//     </>
//   );
// };

// useEffect()

// import { useEffect, useState } from "react";

// Example- 1
// const App = () => {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log("hello");
//     document.title = `${value}`;
//   }, [value]);
//   return (
//     <>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 1)}>Click Me </button>
//     </>
//   );
// };

// Example -2
// const App = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function getData() {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await res.json();
//       if (data && data.length) setData(data);
//     }
//     getData();
//   }, []);
//   return (
//     <>
//       {data.map((post) => (
//         <h1>{post.title}</h1>
//       ))}
//     </>
//   );
// };

// PROP DRILLING
// CREATE CONTEXT

import { createContext } from "react";
import ComponentC from "./ComponentC";

// creating instance of create context
export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  const name = "Sangar";
  const age = 21;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
};

export default App;
