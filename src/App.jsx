import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WeatherDashboard from "./component/WeatherDashboard";
import WeatherDetails from "./component/WeatherDetails";
import WeeklyForecast from "./component/WeeklyForecast";
import OutfitRecommendation from "./component/OutfitRecommendation";
import Footer from "./component/Footer";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import logo from "./assets/barterstyle-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image
              src={logo}
              width="40"
              height="40"
              alt="Stylish Shield Logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Dashboard Cuaca
              </Nav.Link>
              <Nav.Link as={Link} to="/details">
                Detail Cuaca
              </Nav.Link>
              <Nav.Link as={Link} to="/weekly-forecast">
                Prakiraan Mingguan
              </Nav.Link>
              <Nav.Link as={Link} to="/outfit-recommendation">
                Rekomendasi Outfit
              </Nav.Link>
            </Nav>
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
