import { Data } from "./App";
import { Data1 } from "./App";
const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <>
                    <h1>Hello Iam {name}</h1>
                    <h3>Iam {age} years old</h3>
                  </>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </>
  );
};

export default ComponentC;
