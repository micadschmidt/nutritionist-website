import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const GuideRequest = () => {
  return (
    <section className='guide-text'>
      <Link to={`emailsignup`}><h1>get my free 28 day clean eating meal plan here and begin your healing journey now</h1></Link>
    </section>
  )
}

export default GuideRequest