import React from "react";
import styles from "../../css/BlogStyles/BlogCard.module.css";
import { BlogImg5, BlogImg6, BlogImg7 } from "../../Assets";

const BlogCard = () => {
  return (
    <div className={styles.container}>
      {/* Card 1 */}
      <div className={styles.card}>
        <div className={styles.textSection}>
          <p className={styles.subtitle}>Empowering Visionaries</p>
          <h1 className={styles.title}>Crafting Captivating Narratives</h1>
          <p className={styles.subtitle}>Inspire and Engage</p>
          <p className={styles.description}>
            Elevate Your Online Presence with Our Innovative Approach. Unlock
            the Secrets to Digital Success and Outshine the Competition.
          </p>
          <button className={styles.button}>Explore Our Services</button>
        </div>
        <div className={styles.imageSection}>
          <img
            src={BlogImg5}
            alt="Woman working at desk"
            className={styles.image}
          />
          <p className={styles.imageCaption}>
            Redefining the Digital Landscape
          </p>
          <p className={styles.subtitle}>Streamline Your Workflow</p>
          <p className={styles.imageDescription}>
            Harness the Power of Cutting-edge Solutions to Elevate Your Online
            Presence. Unlock Your Full Potential and Achieve Unparalleled
            Success
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className={styles.card}>
        <div className={styles.textSection}>
          <p className={styles.subtitle}>Empowering Innovators</p>
          <h1 className={styles.title}>Shaping the Future of Digital</h1>
          <p className={styles.subtitle}>Inspire and Innovate</p>
          <p className={styles.description}>
            Unleash the Power of Innovation. Our Tailored Strategies Propel Your
            Online Success to Unprecedented Levels. Embrace the Future of
            Digital Transformation and Elevate Your Brand.
          </p>
          <button className={styles.button}>Learn More</button>
        </div>
        <div className={styles.imageSection}>
          <img
            src={BlogImg6}
            alt="Digital workflow setup"
            className={styles.image}
          />
          <p className={styles.imageCaption}>
            Revolutionizing the Digital Landscape
          </p>
          <p className={styles.subtitle}>Streamline Your Workflow</p>
          <p className={styles.imageDescription}>
            Maximize Productivity and Efficiency with Our Cutting-edge
            Solutions. Elevate Your Digital Presence and Drive Unparalleled
            Success.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className={styles.card}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Redefining the Digital Experience</h1>
          <p className={styles.subtitle}>Elevate Your Digital Journey</p>
          <p className={styles.description}>
            Embrace the Future of Digital Transformation. Our Innovative
            Approach Empowers You to Reach New Heights and Exceed Your Goals.
            Unlock the Secrets to Online Success and Outshine the Competition.
          </p>
          <button className={styles.button}>Discover More</button>
        </div>
        <div className={styles.imageSection}>
          <img
            src={BlogImg7}
            alt="Professional growth concept"
            className={styles.image}
          />
          <p className={styles.imageCaption}>Mastering the Mobile Revolution</p>
          <p className={styles.subtitle}>Unlock Your Creative Potential</p>
          <p className={styles.imageDescription}>
            Harness the Power of Technology to Revolutionize Your Online
            Presence. Our Tailored Strategies Propel Your Digital Success to New
            Heights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;