import Card from "react-bootstrap/Card";

function MyCard(props) {
  if (props.info === null) {
    // <p>{weather.name} </p>
    return <p> </p>;
  } else
    return (
      <div>
        <Card border="info" style={{ width: "18rem" }}>
          <Card.Header>Weather results</Card.Header>
          <Card.Body>
            <Card.Title>{props.info.name}</Card.Title>
            <Card.Text>
              <p>Temperature: {Math.round(props.info.main.temp - 273.15)} C </p>
              <p>Feels like: {Math.round(props.info.main.feels_like)} C</p>
              <p>Humidity: {props.info.main.humidity} </p>
              <p>Description: {props.info.weather[0].description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}

export default MyCard;
