import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <nav className='navigation-centered'>
      <section className='footer-nav-menu'>
        <ul>
          <li>
            <Link to={`/`}>&copy; 2023 Derechos reservados</Link>
          </li>
          <li>|</li>
          <li>
            <a target="_blank" href="https://www.instagram.com/nutricamirosen/"><i class="fab fa-instagram"></i> NUTRICAMIROSEN
            </a>
          </li>
        </ul>
      </section>
    </nav>
  )
};

export default Footer;
