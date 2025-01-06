import React from 'react';
import styles from '../../css/HomeStyles/FieldStrip.module.css';
import {whiteStar} from '../../Assets';

function FieldStrip(props) {
  return (
    <>
    <section className={styles.fieldStrip} style={{background:`${props.bgColor}`,color:`${props.textColor}`}}>
<img src={whiteStar} alt="White Star" />
<p>web development       app development   ui design       ux design      branding     logo design      social media mamagemtn         poster design</p>
    </section>
      
    </>
  )
}

export default FieldStrip
