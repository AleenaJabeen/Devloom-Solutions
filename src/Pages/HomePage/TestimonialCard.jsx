import React from 'react';
import styles from '../../css/HomeStyles/Testimonials.module.css';
import { client } from '../../Assets';


function TestimonialCard(props) {
  return (
    <>
    <div className={styles.testimonialCard} style={{background:`${props.bgColor}`}}>
        <img src={client} alt="Client" />
        <h3>Nick Weimann</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
      
    </>
  )
}

export default TestimonialCard
