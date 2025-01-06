import React from 'react';
import styles from '../../css/BlogStyles/RecentPosts.module.css';

function PostCard(props) {
  return (
    <>
    <div className={styles.postCard}>
        <img src={props.postImage} alt={props.postTitle} />
        <div className={styles.postTitle}><h3>{props.postTitle}<span>{props.postDate}</span></h3></div>
        <h2>{props.postTopic}</h2>
        <p>{props.postDescription}</p>
        <div className={styles.readMore}>
            Read More...
        </div>
    </div>
      
    </>
  )
}

export default PostCard
