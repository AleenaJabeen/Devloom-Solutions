
import styles from '../../css/PortfolioStyles/MainHeading.module.css';

const MainHeading = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioHeader}>
        <p>Build the best web and app with us we are devicom solutions</p>
        <p>web and app solutions</p>
        <p>Build the best web and app with us we are devicom solutions</p>
      </div>
      <div className={styles.portfolio}>
        <h1>PORTFOLIO
        </h1>
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tag1}`}>APP DESIGN</span>
          <span className={`${styles.tag} ${styles.tag2}`}>WEB DESIGN</span>
          <span className={`${styles.tag} ${styles.tag3}`}>APP DEVELOPMENT</span>
          <span className={`${styles.tag} ${styles.tag4}`}>WEB DEVELOPMENT</span>
          <span className={`${styles.tag} ${styles.tag5}`}>BRANDING</span>
        </div>
      </div>
    </div>
  );
};

export default MainHeading;
