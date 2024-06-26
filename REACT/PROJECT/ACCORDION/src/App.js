import Accordion from "./Accordion";
import { accordionData } from "./utils/content";
const App = () => {
  return (
    <>
      <div>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion
              key={Math.random() * 20}
              title={title}
              content={content}
            ></Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
