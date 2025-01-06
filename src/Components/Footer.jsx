import React from "react";
import styles from "../css/LayoutStyles/Footer.module.css";
import { Facebook,Instagram,LinkedIn,Twitter } from "../Assets";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>About Us</h4>
          <div className={styles.underline}></div>
          <p>
            At DevLoom solutions, we are the best web design and development agency.
            We provide consulting too.
          </p>
          <p>©2024 All Rights Reserved</p>
          <div className={styles.socialIcons}>
            <a href="#facebook" className={styles.icon}><img src={Facebook} alt="" /></a>
            <a href="#twitter" className={styles.icon}><img src={Twitter} alt="" /></a>
            <a href="#instagram" className={styles.icon}><img src={Instagram} alt="" /></a>
            <a href="#linkedin" className={styles.icon}><img src={LinkedIn} alt="" /></a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <div className={styles.underline}></div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#popular">Popular Works</a></li>
            <li><a href="#blog">Blog & News</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Services</h4>
          <div className={styles.underline}></div>
          <ul>
            <li><a href="#design">Website Design</a></li>
            <li><a href="#dev">Design & Development</a></li>
            <li><a href="#ux">UX/UI Strategy</a></li>
            <li><a href="#app">App Development</a></li>
            <li><a href="#branding">Branding</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Newsletter</h4>
          <div className={styles.underline}></div>
          <p>Information about current events related to our company.</p>
          <input type="email" placeholder="support@gmail.com" />
          <button className={styles.signUpbutton}>Sign Up</button>
        </div>
      </div>
      <div className={styles.bottomNav}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
