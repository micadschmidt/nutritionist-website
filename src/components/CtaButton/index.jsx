import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CtaButton = (props) => {
  const { buttonText, linkAddress, newTab } = props;
  
  return (
    <section>
      <Link to={linkAddress} target={newTab ? "_blank" : ""}>
        <button className="cta-button">{buttonText}</button>
      </Link>
    </section>
  )
};

export default CtaButton;