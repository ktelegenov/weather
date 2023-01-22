import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const apiKey = "5a139e2949d094a8d498f0bc4fdc8099";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    setWeather(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)} C </p>
          <p>Feels like: {Math.round(weather.main.feels_like - 273.15)} C </p>
          <p>Humidity: {weather.main.humidity}</p>

          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;