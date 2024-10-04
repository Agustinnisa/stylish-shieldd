import React, { useState, useEffect } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.509865&longitude=-0.118092&current_weather=true')
      .then(response => response.json())
      .then(data => setWeather(data.current_weather))
      .catch(error => console.error('Error fetching weather:', error));
  }, []);

  if (!weather) {
    return <Spinner animation="border" />;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Current Weather</Card.Title>
        <Card.Text>Temperature: {weather.temperature}°C</Card.Text>
        <Card.Text>Weather: {weather.weathercode}</Card.Text>
        <Card.Text>Wind Speed: {weather.windspeed} km/h</Card.Text>

        <Button variant="primary" onClick={() => navigate('/details')}>View Weather Details</Button>
        <Button variant="secondary" className="mx-2" onClick={() => navigate('/weekly-forecast')}>View Weekly Forecast</Button>
        <Button variant="success" onClick={() => navigate('/outfit-recommendation')}>Get Outfit Recommendation</Button>
      </Card.Body>
    </Card>
  );
}

export default WeatherDashboard;
