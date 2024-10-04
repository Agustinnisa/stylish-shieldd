import React from "react";
import styles from "../module/Footer.module.css";
import logo from "../assets/barterstyle-logo.svg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="BarterStyle Logo" />
            <p>
              Sebuah platform yang mengajak Anda untuk berpartisipasi dalam
              revolusi fashion berkelanjutan. Dengan BarterStyle, Anda dapat
              memperpanjang umur pakai pakaian Anda, mengurangi limbah fashion,
              dan menemukan gaya baru yang unik.
            </p>
          </div>
          <a href="mailto:info@barterstyle.com" className={styles.contactLink}>info@barterstyle.com</a>
        </div>

        {/* Site Links */}
        <div className={styles.footerColumn}>
          <h5>Site Link</h5>
          <div className={styles.footerLinks}>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/event">Event</a>
            <a href="/donasi">Donasi</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className={styles.footerColumn}>
          <h5>Sosial Media</h5>
          <div className={styles.socialMediaIcons}>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF size={30} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={30} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className={styles.footerBottom}>
        <p>&copy; BarterStyle 2024 all rights reserved by Fatmawati</p>
      </div>
    </>
  );
}

export default Footer;
