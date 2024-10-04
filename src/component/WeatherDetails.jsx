import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import styles from "../module/Details.module.css";

const WeatherDetails = () => {
  const [hourlyWeather, setHourlyWeather] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.405&hourly=temperature_2m,precipitation_probability"
    )
      .then((response) => response.json())
      .then((data) => {
        const hourlyData = data.hourly;
        const weatherDetails = hourlyData.time.map((time, index) => ({
          hour: new Date(time).getHours(),
          temperature: hourlyData.temperature_2m[index],
          rainProbability: hourlyData.precipitation_probability[index],
        }));
        setHourlyWeather(weatherDetails);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  // Fungsi untuk memberikan rekomendasi pakaian 
  const getRecommendation = (temp, rainProbability) => {
    if (rainProbability > 50) {
      return "Wear raincoat!";
    } else if (temp < 10) {
      return "Wear a coat!";
    } else if (temp > 20) {
      return "T-shirt weather";
    } else {
      return "Light jacket weather";
    }
  };

  return (
    <Container className={styles.container}>
      <h2 className={styles.title}>Hourly Weather</h2>
      <Table className={styles.weatherTable} striped bordered hover responsive>
        <thead>
          <tr>
            <th>Hour</th>
            <th>Temperature (°C)</th>
            <th>Rain Probability (%)</th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {hourlyWeather.map((weather, index) => (
            <tr key={index}>
              <td>{weather.hour}:00</td>
              <td>{weather.temperature.toFixed(1)}</td>
              <td>{weather.rainProbability}</td>
              <td>
                {getRecommendation(
                  weather.temperature,
                  weather.rainProbability
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WeatherDetails;
