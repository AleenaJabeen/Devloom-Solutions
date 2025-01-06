import React from 'react';
import styles from '../../css/HomeStyles/Testimonials.module.css';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <>
      <section className={styles.testimonialsSection}>
        <h2>Testimonials</h2>
        <p>See what our client has to say about our projects</p>

        <div className={styles.movingBar}>
        <div className={styles.testimonialsOne}>
            <TestimonialCard bgColor="#FFC310"/>
            <TestimonialCard bgColor="#262F68"/>
            <TestimonialCard bgColor="#FFC310"/>
            <TestimonialCard bgColor="#262F68"/>
            </div>
        </div>
        <div className={styles.testimonialsTwo}>
        <TestimonialCard bgColor="#FFC310"/>
            <TestimonialCard bgColor="#262F68"/>
            <TestimonialCard bgColor="#FFC310"/>
            <TestimonialCard bgColor="#262F68"/>

</div>

      </section>
    </>
  )
}

export default Testimonials
