import React from 'react';
import {blogpost1,blogpost2,blogpost3} from '../../Assets';

import PostCard from '../BlogPage/PostCard';
import styles from '../../css/BlogStyles/RecentPosts.module.css';


function Posts() {
    const posts=[
        {
            postImage:blogpost1,
            postTitle:"Travel",
            postTopic:"Who is the best singer on chart?Know him?",
            postDate:"13 March 2023",
            postDescription:"chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  "
        },
        {
            postImage:blogpost2,
            postTitle:"Development",
            postTopic:"How to start export import business from home?",
            postDate:"11 March 2023",
            postDescription:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs "
        },
        {
            postImage:blogpost3,
            postTitle:"Sports",
            postTopic:"Make some drinks with chocolates chocolates and milk",
            postDate:"10 March 2023",
            postDescription:"Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive"
        }
    ]
  return (
    <>
    <div className={styles.postsWrapper}>
    {posts.map((post,index)=>{
        return (<PostCard postImage={post.postImage} postDate={post.postDate} postTitle={post.postTitle} postTopic={post.postTopic} postDescription={post.postDescription} key={index} color="#FCCF12"/>)
    })}
    </div>
      
    </>
  )
}

export default Posts