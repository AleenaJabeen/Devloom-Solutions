import React from 'react';
import styles from '../../css/HomeStyles/Signup.module.css';
import {signup,inputArrow} from '../../Assets';

function SignUp() {
  return (
    <>
    <section className={styles.signupSection} >
        <div className={styles.signupWrapper} style={{background:`url(${signup})`}}>
            <div className={styles.mainWrapper}>
            <h2>Signup for the newsletter</h2>
            <div className={styles.connection}>
                <div className={styles.connectText}>Stay connected</div>
                <div className={styles.connectInputs}>
                    <div className={styles.fname}><input type="text" placeholder='First Name'/></div>
                    <div className={styles.email}><input type="text" placeholder='Email' /><img src={inputArrow} alt="Input Arrow Icon" /></div>
                </div>
            </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default SignUp
