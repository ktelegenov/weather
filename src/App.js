import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Weather from "./components/Weather";

function App() {
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);

  const [data, setData] = useState([]);
  // const [city, setCity] = useState("London");

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=5a139e2949d094a8d498f0bc4fdc8099`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }, [apiUrl]);

  
  return (
    <div className="App">
      <h1>Heading 1</h1>

      <form>
        <input></input>
      </form>

      <Weather weatherData={data} />
    </div>
  );
}

export default App;
