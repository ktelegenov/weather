import React from "react";
import { Card } from "semantic-ui-react";

const InfoCard = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">
        City Name: {weatherData.name}
      </Card.Header>
      <p>Temperature: {weatherData.main.temp} &deg;C</p>
      <p>
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-US")}
      </p>
      <p>
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-US")}
      </p>
      <p>Description: {weatherData.weather[0].main}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      {/* <p>Day: {moment().format("dddd")}</p>
      <p>Date: {moment().format("LL")}</p> */}
    </Card.Content>
  </Card>
);

export default InfoCard;