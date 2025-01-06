import React from 'react';
import styles from '../../css/HomeStyles/FieldStrip.module.css';
import FieldStrip from './FieldStrip';

function FieldStripSection() {
  return (
    <>
    <div className={styles.fieldStripSection}>
<div className={styles.fieldBlue}>
<FieldStrip bgColor="#262F68" textColor="#FAD007"/>
</div>
<div className={styles.fieldYellow}>
<FieldStrip bgColor="#FAD007" textColor="#262F68"/>
</div>
    </div>
      
    </>
  )
}

export default FieldStripSection
