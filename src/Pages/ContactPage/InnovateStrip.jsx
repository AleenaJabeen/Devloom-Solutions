import React from 'react';
import styles from '../../css/ContactStyles/GetInTouch.module.css';
import {
    ProcessHStar,innovateStar
  } from "../../Assets";
function InnovateStrip() {
  return (
    <section className={styles.innovateStripSection}>
       <header className={styles.processHeader}>
        <h1 className={styles.processTitle}>
          <span>Innovate</span> <img src={ProcessHStar} alt="Proces Star" />
          <span>Inspire</span> <img src={ProcessHStar} alt="Process Star" />
          <span>Create</span>
        </h1>
        <div className={styles.stripWrapper}><div className={styles.strip}></div><div><img src={innovateStar} alt="Innovate star" /></div><div className={styles.strip}></div></div>
      </header>
    </section>
  )
}

export default InnovateStrip
