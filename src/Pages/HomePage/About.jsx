import React from "react";
import  styles from '../../css/HomeStyles/About.module.css';
import {
  logoipsum1,
  logoipsum2,
  logoipsum3,
  logoipsum4,
  logoipsum5,
} from "../../Assets";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutUs}>
        <div className={styles.leftBanner}>
          <span>About Us</span>
        </div>
        <div className={styles.content}>
          <h1>ABOUT US</h1>
          <div className={styles.contentText}>
            <p>
              DevLoom is a distinguished design and development agency based in
              the United Kingdom, known for our commitment to crafting
              exceptional digital experiences. Since 2018, DevLoom has been
              reshaping the web & mobile apps with top-notch design and the
              power of no code.
            </p>
            <button className={styles.contactBtn}>Contact Us</button>
          </div>
        </div>
      </div>
      <div className={styles.movingBar}>
        <div className={styles.imageWrapper}>
          <img src={logoipsum1} alt="Logo 1" />
          <img src={logoipsum2} alt="Logo 2" />
          <img src={logoipsum3} alt="Logo 3" />
          <img src={logoipsum4} alt="Logo 4" />
          <img src={logoipsum5} alt="Logo 5" />
          <img src={logoipsum1} alt="Logo 1" />
          <img src={logoipsum2} alt="Logo 2" />
          <img src={logoipsum3} alt="Logo 3" />
          <img src={logoipsum4} alt="Logo 4" />
          <img src={logoipsum5} alt="Logo 5" />
        </div>
      </div>
    </section>
  );
};

export default About;
