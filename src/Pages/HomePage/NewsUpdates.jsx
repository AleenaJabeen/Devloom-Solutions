import React from 'react'
import styles from '../../css/HomeStyles/NewsUpdates.module.css';
import NewsCard from './NewsCard';
import { news1,news2,news3 } from '../../Assets';

function NewsUpdates() {
  return (
    <>
      <section className={styles.newsUpdatesSection}>
      <div className={styles.leftBanner}>
          <span>BLOGS</span>
        </div>
        <div className={styles.newsUpdatesWrapper}>
      <button className={styles.blog}>blog</button>
      <h2>News & Updates</h2>
      <div className={styles.newsSection}>
        <NewsCard title="How to Find Great Webflow 
Consulting Expert" btn="UPDATE" image={news1}/>
 <NewsCard title="From Zero to Hero: How to Launch a Successful Startup" btn="STUDIO" image={news2}/>
 <NewsCard title="7 habits of Highly Successful Business People" btn="DESIGN" image={news3}/>

      </div>
      </div>
      </section>
    </>
  )
}

export default NewsUpdates
