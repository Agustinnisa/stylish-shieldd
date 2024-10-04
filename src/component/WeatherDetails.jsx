import React, { useState, useEffect } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';

function WeatherDetails() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.509865&longitude=-0.118092&hourly=temperature_2m')
      .then(response => response.json())
      .then(data => setDetails(data.hourly))
      .catch(error => console.error('Error fetching details:', error));
  }, []);

  if (!details) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <h1>Weather Details</h1>
      <ListGroup>
        {details.temperature_2m.slice(0, 24).map((temp, index) => (
          <ListGroup.Item key={index}>Hour {index}: {temp}°C</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default WeatherDetails;
