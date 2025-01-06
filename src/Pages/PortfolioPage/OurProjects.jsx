import React from "react";
import styles from "../../css/PortfolioStyles/OurProjects.module.css";
import QAProject from "./QAProject";
import HDQualityProject from "./HDQualityProject";
import ChatProject from "./ChatProject";
import InteractiveOverlayProject from "./InteractiveOverlayProject";
import QAProjectPartTWO from "./QAProjectPartTWO";

function OurProjects() {
  return (
    <>
      <section className={styles.ourProjectsSection}>
        <h3>Our best</h3>
        <h2>Projects</h2>
        <div className={styles.projectsWrapper}>
          <InteractiveOverlayProject/>
          <div className={styles.doubleProject}>
            <QAProject />
            <HDQualityProject />
          </div>
          <div className={styles.doubleProject}>
            <QAProjectPartTWO />
            <ChatProject />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurProjects;
