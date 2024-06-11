import { useContext } from "react";
import { Data } from "./App";
import { Data1 } from "./App";
const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <>
      <h1>
        My name is {name} and iam {age} years old
      </h1>
    </>
  );
};

export default ComponentC;
