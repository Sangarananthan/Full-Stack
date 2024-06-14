import { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textcolor, setTextcolor] = useState("#1b1b1b");
  const [buttonStyle, setbuttonStyle] = useState("white");

  const handlClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextcolor(textcolor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setbuttonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };
  return (
    <>
      <div
        className="back"
        style={{ backgroundColor, color: textcolor, transition: `all .5s` }}
      >
        <button
          style={{
            buttonStyle,
            color: textcolor,
            border: `3px solid ${textcolor}`,
          }}
          onClick={handlClick}
        >
          {backgroundColor === "white" ? "Dark Theme" : "Light Theme"}
        </button>
        <section className="content">
          <h1>Welcome to real world 🤑</h1>
        </section>
      </div>
    </>
  );
};

export default App;
