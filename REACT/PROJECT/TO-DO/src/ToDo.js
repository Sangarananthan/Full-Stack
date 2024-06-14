import { useEffect, useRef, useState } from "react";
import "./index.css";
import { FaTrash } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
const ToDo = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputElment = useRef();

  const FocusInput = () => {
    inputElment.current.focus();
  };

  // Loading from local storage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Updates local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Code Logic
  const addTask = () => {
    if (value.trim()) {
      setTasks([...tasks, value.trim()]);
      setValue("");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
  };

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
              aria-label="Enter your task"
              ref={inputElment}
            />
            <button className="tsk-btn" onClick={addTask}>
              Add
            </button>
          </div>
          <div className="taskList">
            {tasks.length ? (
              tasks.map((task, id) => (
                <div className="list" key={id}>
                  <input type="radio" className="radiobtn" />
                  <p className="taskitem">{task}</p>
                  <div className="trash" onClick={() => removeTask(id)}>
                    <FaTrash />
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                }}
                onClick={() => FocusInput()}
              >
                <h1
                  style={{
                    marginTop: "50px",
                    fontFamily: "cursive",
                  }}
                >
                  ADD TASKS
                </h1>
                <FaNoteSticky
                  style={{ transform: "scale(7)", marginTop: "100px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
