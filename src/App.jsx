import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import WeatherDashboard from "./component/WeatherDashboard";
import WeatherDetails from "./component/WeatherDetails";
import WeeklyForecast from "./component/WeeklyForecast";
import OutfitRecommendation from "./component/OutfitRecommendation";
import Footer from "./component/Footer";
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import logo from "./assets/barterstyle-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./module/Navbar.module.css";
import LoginPage from "./component/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

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
                Recommendation
              </Nav.Link>
            </Nav>
            {isLoggedIn ? (
              <Button className={styles.logoutButton} onClick={handleLogout}>
                Logout
              </Button>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className={styles.containerContent}>
        <Routes>
          {/* Jika belum login, arahkan ke halaman login */}
          <Route
            path="/"
            element={
              isLoggedIn ? <WeatherDashboard /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/details"
            element={isLoggedIn ? <WeatherDetails /> : <Navigate to="/login" />}
          />
          <Route
            path="/weekly-forecast"
            element={isLoggedIn ? <WeeklyForecast /> : <Navigate to="/login" />}
          />
          <Route
            path="/outfit-recommendation"
            element={
              isLoggedIn ? <OutfitRecommendation /> : <Navigate to="/login" />
            }
          />
          {/* Halaman login */}
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
