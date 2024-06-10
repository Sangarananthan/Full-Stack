//CLASS BASED BASED COMPONENT

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
const ValidPassword = () => <h1>Valid Password Succesfull Login!...</h1>;

const App = () => {
  return <div>App</div>;
};

export default App;
