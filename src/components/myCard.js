import Card from "react-bootstrap/Card";

function MyCard(props) {
  if (props.info === null) {
    // <p>{weather.name} </p>
    return <p> </p>;
  } else
    return (
      <div>
        <Card border="info" style={{ width: "18rem" }}>
          <Card.Header>{props.info.name}</Card.Header>
          <Card.Body>
            <Card.Title>{props.info.weather[0].description}</Card.Title>
            <Card.Text>
              <p>Temperature: {Math.round(props.info.main.temp - 273.15)} C </p>
              <p>Feels like: {Math.round(props.info.main.feels_like - 273.15)} C</p>
              <p>Humidity: {props.info.main.humidity} </p>              
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}

export default MyCard;
