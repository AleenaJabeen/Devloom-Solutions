import React from 'react';
import PopularPosts from './PopularPosts';
import JoinTeam from '../BlogPage/JoinTeam';
import Posts from './Posts';
import BlogDetailText from './BlogDetailText';

function BlogDetail() {
  return (
    <>
      <BlogDetailText />
      <PopularPosts />
      <Posts />
      <JoinTeam />
    </>
  )
}

export default BlogDetail