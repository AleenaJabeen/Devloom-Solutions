import React from 'react';
import styles from '../../css/HomeStyles/NewsUpdates.module.css';

function NewsCard(props) {
  return (
    <>
      <div className={styles.newsCard}>
        <img src={props.image} alt={props.btn} />
<button>{props.btn}</button>
<h3>{props.title}</h3>
<p>Pulsar is a Webflow No Code Template for Creatives like you</p>
<h4>READ MORE</h4>
      </div>
    </>
  )
}

export default NewsCard
