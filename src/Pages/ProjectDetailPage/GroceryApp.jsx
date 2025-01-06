import React from "react";
import styles from "../../css/ProjectDetailStyles/GroceryApp.module.css";
import { GroceryApp1, statsScreen,GroceryApp2 } from "../../Assets"; // Assuming the second image is named stats-screen.png

const GroceryApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Grocery App Development</h1>
        <div className={styles.projectType}>
          <h3 className={styles.subtitle}>Project Type</h3>
          <span>Design</span>
          <span> · </span>
          <span>Development</span>
          <span> · </span>
          <span>Deployment</span>
          <span> · </span> <span>Testing</span>
        </div>
      </div>
      <div className={styles.content}>
        <div  className={styles.contentText}>
          <p className={styles.description}>
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone. We’re now at a pivotal moment
            in our AI journey. Breakthroughs in generative AI are fundamentally
            changing how people interact with technology — and at Google.
          </p>
          <p className={styles.description}>
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others.
          </p>
        </div>
        <div className={styles.contentImg}>
        <img
          src={statsScreen}
          alt="Grocery App Screens"
          className={styles.image}
        />
        </div>
      </div>
      <p className={styles.description}>
        Google has been investing in AI for many years and bringing its benefits
        to individuals, businesses and communities. Whether it’s publishing
        state-of-the-art research, building helpful products or developing tools
        and resources that enable others.
      </p>
      <div className={styles.GroceryApp1}>
        <img src={GroceryApp1} alt="" />
      </div>
      <div className={styles.GroceryApp2}>
        <img src={GroceryApp2} alt="" />
        <img src={GroceryApp2} alt="" />
        <img src={GroceryApp2} alt="" />
        <img src={GroceryApp2} alt="" />
      </div>
      <p className={styles.description}>
        More than 3 billion people already benefit from AI-powered features in
        Google Workspace, whether it’s using Smart Compose in Gmail or
        auto-generated summaries in Google Docs. Now, we’re excited to take the
        next step and bring a limited set of trusted testers a new set of
        features that makes the process of writing even easier. In Gmail and
        Google Docs, you can simply type in a topic you’d like to write about,
        and a draft will be instantly generated for you. So if you’re a manager
        onboarding a new employee, Workspace saves you the time and effort
        involved in writing that first welcome email. From there, you can
        elaborate upon or abbreviate the message or adjust the tone to be more
        playful or professional — all in just a few clicks. We’ll be rolling out
        these new experiences to testers in the coming weeks.
      </p>
    </div>
  );
};

export default GroceryApp;