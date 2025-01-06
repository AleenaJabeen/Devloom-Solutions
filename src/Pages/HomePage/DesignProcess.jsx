import React from "react";
import style from "../../css/HomeStyles/About.module.css";
import styles from "../../css/HomeStyles/DesignProcess.module.css";
import styles2 from "../../css/HomeStyles/Services.module.css";
import {
  Design1,
  Design2,
  Design3,
  DesignArrow,
  ProcessHStar,
  ProcessStar,
} from "../../Assets";

const DesignProcess = () => {
  return (
    <div className={styles.processContainer}>
      <header className={styles.processHeader}>
        <h1 className={styles.processTitle}>
          <span>Innovate</span> <img src={ProcessHStar} alt="" />
          <span>Inspire</span> <img src={ProcessHStar} alt="" />
          <span>Create</span>
        </h1>
      </header>
      <section className={styles.processContent}>
      <img src={ProcessStar}  className={styles.processStar1} alt="" />
        <div className={`${style.leftBanner} ${styles.leftBanner}`}>
          <span>Procedure</span>
        </div>
        <h2 className={styles.processSubtitle}>
          How Our Design Process{" "}
          <div className={`${styles.highlight} ${styles2.highlight}`}>
            <p>Works</p>
          </div>
        </h2>
        <p className={styles.deisgnprocessDescription}>
          Devloom Solution follows a collaborative and iterative approach to
          design, with a focus on understanding and meeting the unique needs of
          each client.
        </p>
        <img src={ProcessStar} className={styles.processStar2} alt="" />
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.processStepContent}>
              <h6>Step 1:</h6>
              <h3>
                {" "}
                Design <img src={DesignArrow} alt="" />
              </h3>
              <p>
                Devloom gives you all the tools you need to create and host
                virtual experiences that look awesome and put your brand center
                stage.
              </p>
            </div>
            <div className={styles.processStepImage}>
              <img src={Design1} alt="" />
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.processStepContent}>
                
              <h6>Step 2: </h6>
              <h3>
                Develop <img src={DesignArrow} alt="" />
              </h3>
              <p>
                Cut through the noise, grab your audience's attention, and turn
                passive attendees into active participants.
              </p>
              
            </div>
            <div className={styles.processStepImage}>
              <img src={Design2} alt="" />
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.processStepContent}>
              <h6>Step 3: </h6>
              <h3>
                Analyze <img src={DesignArrow} alt="" />
              </h3>
              <p>
                Track the success of your events with deep insights and
                analytics measured across the entire attendee experience.
              </p>
            </div>
            <div className={styles.processStepImage}>
              <img src={Design3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignProcess;