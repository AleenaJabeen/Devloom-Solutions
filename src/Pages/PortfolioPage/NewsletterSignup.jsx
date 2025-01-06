import styles from '../../css/PortfolioStyles/NewsletterSignup.module.css';
import { RightArrowP } from '../../Assets';

const NewsletterSignup = () => {
  return (
    <div className={styles.signupContainer}>
      <p className={styles.subHeading}>Stay connected</p>
      <h2 className={styles.heading}>Signup for the newsletter</h2>
      <form className={styles.signupForm}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.inputField}
          />
          <button type="submit" className={styles.submitButton}>
          <img src={RightArrowP} alt="" />
        </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;