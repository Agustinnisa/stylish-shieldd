import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherDashboard from './component/WeatherDashboard';
import WeatherDetails from './component/WeatherDetails';
import WeeklyForecast from './component/WeeklyForecast';
import OutfitRecommendation from './component/OutfitRecommendation';
import { Container, Navbar, Nav, Image, Footer } from 'react-bootstrap';
import logo from './assets/barterstyle-logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} width="40" height="40" alt="Stylish Shield Logo" /> Stylish Shield
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/weekly-forecast">Weekly Forecast</Nav.Link>
              <Nav.Link as={Link} to="/outfit-recommendation">Outfit Recommendation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/details" element={<WeatherDetails />} />
          <Route path="/weekly-forecast" element={<WeeklyForecast />} />
          <Route path="/outfit-recommendation" element={<OutfitRecommendation />} />
        </Routes>
      </Container>

      <Footer className="bg-dark text-white text-center py-3 mt-4">
        <Container>
          <p>© 2024 Stylish Shield. All rights reserved.</p>
        </Container>
      </Footer>
    </Router>
  );
};

export default App
