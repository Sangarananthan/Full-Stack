import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setitems(res.data.meals);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <header>
        <h1>Sea Foods</h1>
        <h1>🦐</h1>
      </header>
      <div className="card">
        {items.map((item) => (
          <div key={item.idMeal} className="carditems">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h1>{item.strMeal}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
