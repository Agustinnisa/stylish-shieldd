import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../assets/barterstyle-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          {/* Logo and Description */}
          <Col md={4}>
            <h5>
              <img src={logo} alt="BarterStyle Logo" style={{ height: '50px', marginRight: '10px' }} />
            </h5>
            <p>
              Sebuah platform yang mengajak Anda untuk berpartisipasi dalam revolusi fashion berkelanjutan. 
              Dengan BarterStyle, Anda dapat memperpanjang umur pakai pakaian Anda, mengurangi limbah fashion, 
              dan menemukan gaya baru yang unik.
            </p>
            <p>
              <a href="mailto:info@barterstyle.com">info@barterstyle.com</a>
            </p>
          </Col>

          {/* Site Links */}
          <Col md={4}>
            <h5>Site Link</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/event">Event</Link>
              </li>
              <li>
                <Link to="/donasi">Donasi</Link>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h5>Sosial Media</h5>
            <div className="d-flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-3">
                <FaFacebook size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mr-3">
                <FaInstagram size={30} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>© BarterStyle 2024 all right reserved by Fatmawati</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
