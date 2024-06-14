import { useEffect, useState } from "react";
import "./index.css";
const ToDo = () => {
  const [value, setValue] = useState("");
  const [tasks, settasks] = useState(["Hey"]);
  const addTask = () => {
    if (value.trim()) {
      settasks([...tasks, value.trim()]);
      setValue("");
    }
  };

  //   Load Tasks on Refresh
  useEffect(() => {
    const taskScheduled = localStorage.getItem("tasks");
    if (taskScheduled) {
      settasks(taskScheduled);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="todo">
          <div className="inputField">
            <input
              className="task"
              placeholder="Enter your task"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <button className="tsk-btn" onClick={addTask}>
              Add
            </button>
          </div>
          <div className="taskList">
            {tasks.map((task) => (
              <div className="list">
                <input type="radio" className="radiobtn"></input>
                <p>{task}</p>
                <span>x</span>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
