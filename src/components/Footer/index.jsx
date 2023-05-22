import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <nav className='navigation-centered'>
      <section className='footer-nav-menu'>
        <ul>
          <li>
            <Link to={`/`}>&copy;the nutritional nest</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={`/`}>terms & conditions</Link>
          </li>
          <li>|</li>
          <li>
            <a target="_blank" href="https://thirdandrewcreative.com/">site by third andrew creative
            </a>
            </li>
        </ul>
      </section>
    </nav>
  )
};

export default Footer;