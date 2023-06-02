import React, { useState, useEffect } from 'react';
import './style.css';
import logo from '../../assets/facebook-dp.png';
import GuideRequest from '../GuideRequest';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [navExpanded, setNavExpanded] = useState(false)
  const [backgroundState, setBackgroundState] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, []);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setBackgroundState(true)
    } else {
      setBackgroundState(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <section className='nav-area'>
      <GuideRequest />
      <nav className={backgroundState ? "navigation active" : "navigation"}>
          <Link to={"/"}><img className="logo-img" src={logo} /></Link>
          <button
            className="hamburger"
            onClick={() => {
              setNavExpanded(!navExpanded);
            }}
          >
          {/* icon from heroicons.com */}
            <Link to={location.pathname} onClick={() => {setNavExpanded(!navExpanded)}}><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></Link>
        </button>
        <section className={ navExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li>
              <Link to={`/`} className={location.pathname === '/' ? "nav-active" : ""} onClick={() => {setNavExpanded(!navExpanded)}}>HOME</Link>
            </li>
            <li>
              <Link to={`about`} className={location.pathname === '/about' ? "nav-active" : ""} onClick={() => {setNavExpanded(!navExpanded)}}>ABOUT</Link>
            </li>
            <li>
              <Link to={`schedule`} className={location.pathname === '/schedule' ? "nav-active" : ""} onClick={() => {setNavExpanded(!navExpanded)}}>WORK WITH ME</Link>
            </li>
            <li>
              <Link to={`/testing`} className={location.pathname === '/testing' ? "nav-active" : ""} onClick={() => {setNavExpanded(!navExpanded)}}>TESTING</Link>
            </li>
            <li>
              <Link to={`/retreats`} className={location.pathname === '/retreats' ? "nav-active" : ""} onClick={() => {setNavExpanded(!navExpanded)}}>RETREATS</Link>
            </li>
            <li>
              <Link to={`/recipes`} className={location.pathname === '/recipes' ? "nav-active" : ""} onClick={() => {setNavExpanded(!navExpanded)}}>RECIPES</Link>
            </li>
            <li>
              <Link to={`blog`} className={location.pathname === '/blog' ? "nav-active" : location.pathname === '/blog/blogpost' ? "nav-active" : ""} onClick={() => {setNavExpanded(!navExpanded)}}>BLOG</Link>
            </li>
            <li>
              <Link to={`/contact`} className={location.pathname === '/contact' ? "contact-link nav-active" : "contact-link"} onClick={() => {setNavExpanded(!navExpanded)}}>CONTACT</Link>
            </li>
          </ul>
        </section>
      </nav>
    </section>
    </>
  )
}

export default NavBar;