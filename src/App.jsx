import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WeatherDashboard from "./component/WeatherDashboard";
import WeatherDetails from "./component/WeatherDetails";
import WeeklyForecast from "./component/WeeklyForecast";
import OutfitRecommendation from "./component/OutfitRecommendation";
import Footer from "./component/Footer";
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import logo from "./assets/barterstyle-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./module/Navbar.module.css";

function App() {
  return (
    <Router>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} className={styles.logo} alt="BarterStyle Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navLinks}>
              <Nav.Link as={Link} to="/" className={styles.navLink}>
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/details" className={styles.navLink}>
                Details
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/weekly-forecast"
                className={styles.navLink}
              >
                Weekly Forecast
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/outfit-recommendation"
                className={styles.navLink}
              >
                Outfit Recommendation
              </Nav.Link>
            </Nav>
            <Button className={styles.logoutButton}>Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/details" element={<WeatherDetails />} />
          <Route path="/weekly-forecast" element={<WeeklyForecast />} />
          <Route
            path="/outfit-recommendation"
            element={<OutfitRecommendation />}
          />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
