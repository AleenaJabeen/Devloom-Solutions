import React from 'react';
import RecentPosts from './RecentPosts';
import Posts from './Posts';
import JoinTeam from './JoinTeam';
import BlogSection from './BlogSection';
import BlogCard from './BlogCard';


function Blogs() {
  return (
    <>
    <BlogSection />
    <BlogCard />
      <RecentPosts/>
      <Posts/>
      <JoinTeam/>
    </>
  )
}

export default Blogs
