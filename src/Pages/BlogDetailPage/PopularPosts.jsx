import React from 'react'
import styles from "../../css/BlogStyles/RecentPosts.module.css";

function PopularPosts() {
  return (
    <section className={styles.recentPostsSection}>
      <div className={styles.postsHeader}>
          <h3>Popular Posts</h3>
          <div className={styles.viewAllBtn}>View All</div>
        </div>
    </section>
  )
}

export default PopularPosts