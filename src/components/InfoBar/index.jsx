import React from 'react'
import CtaButton from '../CtaButton';
import './style.css'

const InfoBar = () => {
  return (
    <section className="infoBody">
      <div className='info'>
        <h1>integrative & functional clinical nutritionist  ||  yoga teacher  ||  mom of four</h1>
      </div>
      <div className='content-container-two'>

        <section className='imgContainer-two'>
          <figure className='shadow bg-image'></figure>
        </section>

        <article className='textContainer-two'>
          <h2 className='title-two'>Discover true wellness with my personalized approach to nutrition</h2>
          <p className='value-prop-summary'>Functional nutrition is a personalized, science-based approach that focuses on identifying and treating the root causes of health imbalances, rather than just symptoms. It considers each individual's unique genetic, biochemical, and lifestyle factors, including diet, to create a tailored health plan. It acknowledges that a single condition can have multiple causes, and one cause can lead to various conditions, depending on an individual's specific circumstances. This method provides a comprehensive understanding of a person's health, promoting optimal wellbeing.</p>
       
          <div className="button-container">
            <CtaButton
              buttonText={'Discover True Wellness'}
              linkAddress={`about`}
            />
          </div>
        </article>

        
      </div>

    </section>
  )
}

export default InfoBar