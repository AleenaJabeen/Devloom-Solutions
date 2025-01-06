import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/BlogStyles/RecentPosts.module.css";
import { RecentPost } from "../../Assets";

function RecentPosts() {
  return (
    <>
      <section className={styles.recentPostsSection}>
        <div className={styles.postsHeader}>
          <h3>Our Recent Posts</h3>
          <div className={styles.viewAllBtn}>View All</div>
        </div>
        <div className={styles.recentPosts}>
          <div className={styles.postHeaderImg}>
            <img src={RecentPost} alt="Recent Post" />
          </div>
          <div className={styles.postHeaderContent}>
            <div className={styles.devStarter}>
              <h3>
                development <span>16March 2023</span>
              </h3>
            </div>
            <h2>
              How to make a Game look more attractive with New VR & AI
              Technology
            </h2>
            <p>
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <Link to="/blogdetail" className={styles.readMoreBtn}>
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentPosts;
