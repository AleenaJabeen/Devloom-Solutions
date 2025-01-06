import React from "react";
import styles from "../../css/ContactStyles/ContactForm.module.css";
import { mainContactImg } from "../../Assets";

function ContactForm() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.imageContainer}>
        <img
          src={mainContactImg}
          alt="Laptop and Notes"
          className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label}>First Name</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Last Name</label>
            <input type="text" className={styles.input} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Mail</label>
            <input type="email" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Phone</label>
            <input type="tel" className={styles.input} />
          </div>
        </div>
        <div className={styles.services}>
          <p className={styles.serviceHeading}>What service do you need?</p>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="service"
                className={styles.radioInput}
              />
              <span className={styles.radioCircle}></span>
              Web Design
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="service"
                className={styles.radioInput}
                defaultChecked
              />
              <span className={styles.radioCircle}></span>
              App Design
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="service"
                className={styles.radioInput}
              />
              <span className={styles.radioCircle}></span>
              Graphic Design
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="service"
                className={styles.radioInput}
              />
              <span className={styles.radioCircle}></span>
              Digital Marketing
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="service"
                className={styles.radioInput}
              />
              <span className={styles.radioCircle}></span>
              Other
            </label>
          </div>
        </div>
        <div className={styles.row}>
          <input placeholder="Write your message..." className={`${styles.input} ${styles.message}`} />
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;