import React from 'react';
import styles from '../../css/PortfolioStyles/AgendaBuilder.module.css';
import { AgendaBuilder1,AgendaBuilder2 } from '../../Assets';

const AgendaBuilder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h2>Drag-n-drop Agenda Builder</h2>
        <p>
          Quickly rearrange your webinar’s sequence of actions and instantly generate an agenda
          that auto-updates as you move actions around.
        </p>
      </div>
      <div
        className={styles.sideImg}
        // style={{ backgroundImage: `url(${AgendaBuilder1})` }}
      >
        <img src={AgendaBuilder1} alt="" width='100%' />
        <img src={AgendaBuilder2} alt="Agenda Builder Icon" className={styles.overlayImg} />
      </div>
    </div>
  );
};

export default AgendaBuilder;