import React from "react";
import style from "../../css/HomeStyles/About.module.css";
import { mobileApp1, mobileApp2, mobileApp3, viewArrow } from "../../Assets";
import styles from "../../css/HomeStyles/LatestProjects.module.css";
import ProjectCard from "./ProjectCard";

function LatestProjects() {
  return (
    <>
      <section className={styles.latestProjectsSection}>
        <div className={`${style.leftBanner} ${styles.leftBanner}`}>
          <span>Portfolio</span>
        </div>
        {/* Project Intro Section */}
        <div className={styles.projectIntro}>
          <div className={styles.introHeading}>
            <h2>Latest Projects</h2>
          </div>
          <div className={styles.projectDetail}>
            <p>
              {" "}
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sit .Lorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sit
            </p>
            <div className={styles.endingLines}>
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
            </div>
          </div>
        </div>
        {/* Project cards */}
        <div className={styles.latestProjects}>
          <ProjectCard projectNo="01" image={mobileApp1} />
          <ProjectCard projectNo="02" image={mobileApp2} />
          <ProjectCard projectNo="03" image={mobileApp3} />
        </div>
        {/* View Button  */}
        <div className={styles.viewMoreBtn}>
          View More
          <img src={viewArrow} alt="View Arrow Icon" />
        </div>
      </section>
    </>
  );
}

export default LatestProjects;