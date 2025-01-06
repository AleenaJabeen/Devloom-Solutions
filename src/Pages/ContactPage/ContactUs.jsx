import React from 'react';
import styles from '../../css/ContactStyles/ContactUs.module.css';

function ContactUs() {
  return (
    <>
    <section className={styles.contactUsSection}>
      <div className={styles.contactWrapper}>
      <div></div>
        <div className={styles.contactForm}>
         
            <h2>Contact Us</h2>
            <div className={styles.contactInput}>
                <div className={styles.email}><h3>Email</h3><h3>Devloomsolution@gmail.com</h3></div>
                <div className={styles.phone}><h3>Phone Number</h3><h3>0336-8628642864</h3></div>
                <div className={styles.address}><h3>Address</h3><h3>Islambad</h3></div>
            </div>
        </div>
        </div>
    </section>
      
    </>
  )
}

export default ContactUs
