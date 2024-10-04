import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../module/Dashboard.module.css";
import cloudImage from "../assets/image-awan.png";

function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.509865&longitude=-0.118092&current_weather=true"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.current_weather))
      .catch((error) => console.error("Error fetching weather:", error));
  }, []);

  if (!weather) {
    return <div className={styles.spinner}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardTitle}>Current Weather</div>
      <div className={styles.weatherInfoContainer}>
        <img src={cloudImage} alt="Cloud" className={styles.cloudImage} />
        <div>
          <div className={styles.cardText}>
            Temperature: {weather.temperature}°C
          </div>
          <div className={styles.cardText}>Weather: {weather.weathercode}</div>
          <div className={styles.cardText}>
            Wind Speed: {weather.windspeed} km/h
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className={styles.buttons}>
        <button
          className={styles.buttonPrimary}
          onClick={() => navigate("/details")}
        >
          Weather Details
        </button>
        <button
          className={styles.buttonSecondary}
          onClick={() => navigate("/weekly-forecast")}
        >
          Weekly Forecast
        </button>
        <button
          className={styles.buttonSuccess}
          onClick={() => navigate("/outfit-recommendation")}
        >
          Get Outfit Recommendation
        </button>
      </div>
    </div>
  );
}

export default WeatherDashboard;
