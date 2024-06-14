import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showinput, setshowinput] = useState(false);
  const [BgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setshowinput(false);
      setBgColor("#fff");
    }
  };
  return (
    <>
      <section
        className="container"
        style={{ backgroundColor: BgColor }}
        onClick={(e) => handleClick(e)}
      >
        {showinput ? (
          <input type="text" placeholder="search..."></input>
        ) : (
          <FaSearch
            onClick={() => setshowinput(true)}
            style={{ transform: "scale(2)" }}
          />
        )}
      </section>
    </>
  );
};

export default HiddenSearchBar;
