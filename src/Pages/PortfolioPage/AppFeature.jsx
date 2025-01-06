import styles from '../../css/PortfolioStyles/AppFeature.module.css';
import { AF1,AF2,AF3,AF4 } from '../../Assets';

const AppFeature = () => {
  return (
    <div className={styles.featureContainer}>
      <h2 className={styles.featureTitle}>
        MOST COST EFFICIENT & USER FRIENDLY APPS BY DEVLOOM
      </h2>
      <div className={styles.featureContent}>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.icon}><img src={AF1} alt="" /></span>
            <h3>User Friendly Mobile Apps</h3>
            <p>Our efficient mobile apps we create are user friendly.</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.icon}><img src={AF3} alt="" /></span>
            <h3>Supported for both iOS & Android</h3>
            <p>Our mobile apps are supported for both iOS and Android.</p>
          </div>
        </div>
        {/* <div className={styles.mockup}>
          <img
            src={AppFeatureImg}
            alt="Mobile app mockup"
            className={styles.image}
          />
        </div> */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.icon}><img src={AF2} alt="" /></span>
            <h3>Cost Effective</h3>
            <p>We believe in forming positive habits. Build your U.S. credit with Sable.</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.icon}><img src={AF4} alt="" /></span>
            <h3>Timely Delivery</h3>
            <p>Start building credit before you even enter the country.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeature;