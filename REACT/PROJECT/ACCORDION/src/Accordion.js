import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setisActive] = useState(false);

  return (
    <section className="accordian-card">
      <div className="header" onClick={() => setisActive(!isActive)}>
        <div className="title">{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      <div className="content">
        {isActive ? <p className="card-content">{content}</p> : ""}
      </div>
    </section>
  );
};

export default Accordion;
