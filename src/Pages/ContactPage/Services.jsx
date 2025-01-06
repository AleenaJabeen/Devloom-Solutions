import React from 'react';
import styles from '../../css/ContactStyles/Services.module.css';
import { play } from "../../Assets";


function Services() {
  return (
    <>
    <section className={styles.servicesSection}>
    <div className={styles.playContainer}>
                <img src={play} alt="Play Button" className={styles.playImg} />
                <svg
                  className={styles.rotatedText}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text>
                    <textPath href="#circlePath" startOffset="32%">
                      DEVLOOM.  SOLUTIONS
                    </textPath>
                  </text>
                </svg>
              </div>
        <span className={styles.circle}></span>
        <span className={`${styles.services} ${styles.service1}`}>web design</span>
        <span className={`${styles.services} ${styles.service2}`}>app design</span>
        <span className={`${styles.servicesFilled} ${styles.service3}`}>web development</span>
        <span className={`${styles.servicesFilled} ${styles.service4}`}>marketing</span>
        <span className={`${styles.services} ${styles.service5}`}>branding strategy</span>
        <span className={`${styles.services} ${styles.service6}`}>app development</span>
    </section>
      
    </>
  )
}

export default Services
