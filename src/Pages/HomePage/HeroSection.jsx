import React from "react";
import { Star, arrow, mainImg, mobileimg, play, reimage } from "../../Assets";
import styles from "../../css/HomeStyles/HeroSection.module.css";

function HeroSection() {

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.header}>
          <div className={styles.starOne}>
            <img src={Star} alt="Star" />
          </div>
          <h2>website that transform your vision</h2>
          <div className={styles.starTwo}>
            <img src={Star} alt="Two" />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainOne}>
            <div className={styles.mainImges}>
              <img className={styles.mobImg} src={mobileimg} alt="mobile" />
              
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
            </div>
            <div className={styles.aboutUs}>
              <div className={styles.inlineHr}>
                <h2>about us</h2>
                <hr className={styles.hr} />
              </div>
              <div className={styles.para}>
                <p>
                  We are a creative agency that offer web and app solutions. We
                  are a creative agency that offer web and app solutions.
                  <img className={styles.arrowBtn} src={arrow} alt="Arrow" />
                  We are a creative agencyy that offer web and app solutions
                  forr you at the pocket friendly rates.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mainTwo}>
            <img className={styles.mainImg} src={mainImg} alt="Main" />
            <img className={styles.reImg} src={reimage} alt="Main" />
            <div className={styles.contactBtn}>
              Contact us Today <img src={arrow} alt="" />
            </div>
          </div>
          <div className={styles.mainThree}>
            <div className={styles.trustedUser}>
              <h3>
                8.2<span>k</span>
              </h3>
              <p>Trusted Users</p>
            </div>
            <div className={styles.prjtComplt}>
              <h3>
                120<span>+</span>
              </h3>
              <p>Project Completed</p>
            </div>
            <div className={styles.clientSatisfaction}>
              <h3>
                97<span>%</span>
              </h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;