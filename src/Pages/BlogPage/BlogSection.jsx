import React from "react";
import styles from "../../css/BlogStyles/BlogSection.module.css";
import { BlogImg1, BlogImg2, BlogImg3, BlogImg4 } from "../../Assets";

const BlogSection = () => {
  return (
    <div className={styles.blogSection}>
      <div className={styles.mainHeading}>
        <h1 className={styles.heading}>OUR INNOVATIVE BLOGS</h1>
        <p className={styles.subheading}>
          Dexlooms is a distinguished design and development agency based in the
          United Kingdom, known for our commitment to crafting exceptional
          digital experiences.
        </p>
        <div className={styles.colorBoxes}>
        <div className={styles.yellowBox}></div>
          <div className={styles.blueBox}></div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={BlogImg1} alt="Blog showcase" className={styles.mainImage} />
      </div>
      <div className={styles.contentGrid}>
        <div
          className={`${styles.card} ${styles.smallCard}`}
          style={{ backgroundColor: "#262f68" }}
        >
          <p className={styles.cardText}>
            Discover the transformative power of our blog
          </p>
          <img src={BlogImg2} alt="Author" className={styles.cardImage} />
        </div>
        <div className={`${styles.card} ${styles.wideCard}`}>
          <img src={BlogImg3} alt="Laptop" className={styles.cardImage} />
        </div>
        <div
          className={`${styles.card} ${styles.smallCard}`}
          style={{ backgroundColor: "#fccf12" }}
        >
          <p className={styles.cardText}>
            Amplify your brand's digital impact. Our blog offers a wealth of
            knowledge.
          </p>
          <img src={BlogImg4} alt="Author" className={styles.cardImage} />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;