import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import MyCard from "./myCard.js";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const apiKey = "5a139e2949d094a8d498f0bc4fdc8099";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (response.status === 400) {
      console.log("error");
    } else {
      const data = await response.json();
      console.log(data);
      setWeather(data);
    }
  }

  return (
    <div>
      <h2>Get the weather for city of your choice. </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Get weather
        </Button>
      </Form>

      <MyCard info={weather}> </MyCard>
    </div>
  );
}

export default App;
