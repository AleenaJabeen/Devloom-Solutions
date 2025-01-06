import React from 'react';
import { JoinImage } from '../../Assets';
import styles from '../../css/BlogStyles/JoinTeam.module.css';

function JoinTeam() {
  return (
    <>
    <section className={styles.joinTeamSection}>
       
        <div className={styles.joinContent}>
            <h2>Join a global team of change-makers.</h2>
            <p>Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat nunc in parturient.</p>
            <div className={styles.jobOpenBtn}>
                View Job Openings
            </div>
        </div>
        <div className={styles.joinImage}>
            <img src={JoinImage} alt="Join Global Team" />
        </div>
    </section>
      
    </>
  )
}

export default JoinTeam
