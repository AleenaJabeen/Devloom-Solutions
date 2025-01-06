import React from 'react';
import styles from '../../css/PortfolioStyles/OurProjects.module.css';
import { interactive } from '../../Assets';


function InteractiveOverlayProject() {
  return (
    <>
    <div className={styles.interactiveProject}>
        <img src={interactive}alt="Interactive Project" />
        <div className={styles.projectText}>
<h3>Interactive overlays</h3>
<p>Add custom branded graphics that lay over your live video to intro speakers, emphasize key points, and display clickable CTAs.</p>
</div>
    </div>
      
    </>
  )
}

export default InteractiveOverlayProject
