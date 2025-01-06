import React from 'react';
import styles from '../../css/PortfolioStyles/OurProjects.module.css';
import { QAProject2 } from '../../Assets';


function QAProjectPartTWO() {
  return (
    <>
      <div className={styles.qaProject2}>
        <img src={QAProject2} alt="QAProject2" />
        <div className={styles.qaprojectText}>
<h3>Q&A</h3>
<p>Moderate audience questions, allow upvoting, and bring attendees on-stage.</p>
</div>
    </div>
    </>
  )
}

export default QAProjectPartTWO;
