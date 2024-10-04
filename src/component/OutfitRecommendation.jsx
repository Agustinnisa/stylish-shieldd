import React, { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import styles from '../module/Recommendation.module.css';
import tshirtImage from '../assets/T-shirt weather.jpg';
import jacketImage from '../assets/Light jacket weather.jpg';
import sweaterImage from '../assets/sweater.jpg';

function OutfitRecommendation() {
  const [weather, setWeather] = useState(null);
  const [outfit, setOutfit] = useState("");
  const [outfitImage, setOutfitImage] = useState("");

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.509865&longitude=-0.118092&current_weather=true"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.current_weather);
        generateOutfitRecommendation(data.current_weather.temperature);
      })
      .catch((error) => console.error("Error fetching weather:", error));
  }, []);

  const generateOutfitRecommendation = (temp) => {
    if (temp < 10) {
      setOutfit("Wear a thick jacket and warm clothing.");
      setOutfitImage(jacketImage);
    } else if (temp < 20) {
      setOutfit("A light jacket or sweater will be sufficient.");
      setOutfitImage(sweaterImage);
    } else {
      setOutfit("T-shirt and shorts are ideal.");
      setOutfitImage(tshirtImage);
    }
  };

  if (!weather) return <Spinner animation="border" />;

  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.title}>Outfit Recommendation</Card.Title>
        <Card.Text>Current Temperature: {weather.temperature}°C</Card.Text>
        <Card.Text>{outfit}</Card.Text>

        {outfitImage && (
          <img
            src={outfitImage}
            alt="Recommended Outfit"
            className={styles.outfitImage}
          />
        )}

        <Button
          variant="primary"
          onClick={() => alert("Outfit saved to your profile!")}
          className={styles.button}
        >
          Save Outfit to Profile
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OutfitRecommendation;
