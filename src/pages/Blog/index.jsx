import React from 'react';
import './style.css';
import BlogCard from '../../components/BlogCard';

const Blog = () => {
  return (
    <main>
      <section className='blog-container'>
        <BlogCard />
      </section>
    </main>
  )
}

export default Blog;