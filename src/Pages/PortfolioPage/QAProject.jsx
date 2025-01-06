import React from 'react';
import styles from '../../css/PortfolioStyles/OurProjects.module.css';
import { QAProject1 } from '../../Assets';


function QAProject() {
  return (
    <>
      <div className={styles.qaProject}>
        <img src={QAProject1}alt="QAProject" />
        <div className={styles.qaprojectText}>
<h3>Q&A</h3>
<p>Moderate audience questions, allow upvoting, and bring attendees on-stage.</p>
</div>
    </div>
    </>
  )
}

export default QAProject
