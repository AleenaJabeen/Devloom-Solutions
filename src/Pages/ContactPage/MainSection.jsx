import React from 'react'
import styles from '../../css/ContactStyles/MainSection.module.css'
import {contactHImg1,contactHImg2,contactStar,achievementsIcon,dollarIcon,mainContactImg} from '../../Assets'

function MainSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}><h1> CONTACT US </h1><img className={styles.headerImg} src={contactHImg1} alt="" /></div>
        <div className={styles.title}><img className={styles.headerImg} src={contactHImg2} alt="" /><h1>MODERN DESIGNS SOLUTIONS</h1></div>
      </div>
      <div className={styles.card}>
      <div className={styles.achievements}>
        <p>D</p>
        <div className={styles.achievementCard}>
            <img src={achievementsIcon} alt="" />
          <div className={styles.achievementCardContent}>
          <h3 className={styles.cardTitle}>Achievements</h3>
          <p className={styles.cardText}>Best App Developer</p>
          </div>
        </div>
        <div className={styles.achievementCard}>
            <img src={dollarIcon} alt="" />
            <div className={styles.achievementCardContent}>
          <h3 className={styles.cardTitle}>Website</h3>
          <p className={styles.cardText}>Most Popular App Developer</p>
          </div>
        </div>
      </div>
      <div className={styles.banner1}>
        <p>Make The Best Financial Decision</p>
      </div>
      <div className={styles.banner2}>
        <div className={styles.bannerImg}><img src={contactStar} alt="" /></div>
      </div>
      </div>
    </div>
  )
}

export default MainSection