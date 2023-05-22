import React from 'react'
import wwm from '../../assets/wwm.jpg'
import freeplan from '../../assets/freeplan.jpg'
import aboutimg from '../../assets/kristenwithdog.jpg'
import CtaButton from '../CtaButton';
import { Link } from 'react-router-dom'
import './style.css'

const CardContainer = () => {
  return (
    <section>
      <div className='bg-gray'>
        <h1 className='title-two'>Let's Get Started</h1>
      </div>
      <div className='card-container'>

        <div className='card down'>
          <div className='card-top'>
            <img src={aboutimg} className="infoImg" alt="about kristen"></img>  
          </div>
          <div className='card-body'>
            <h2 className='title-two'>Meet Kristen</h2>
            <p className='value-prop-summary'>As a certified yoga instructor and loving mom of four, I believe that peace can be found around food & body when we lead the journey with self-compassion. Your body has wisdom and is yearning for you to tune in to what it’s saying, and I am here to help!</p>
          </div>
          <div className='button-div'>
            <CtaButton
              buttonText={'about me'}
              linkAddress={`about`}  
            />
          </div>
        </div>

        <div className='card up'>
          <div className='card-top'>
            <img src={wwm} className="infoImg" alt="work with me"></img>      
          </div>
          <div className='card-body'>
            <h2 className='title-two'>Work With Me</h2>
            <p className='value-prop-summary'>Work with me one on one and we will focus on nutrition, gut health, sleep, stress management, and more. We will address obstacles and come up with solutions to set you up for success. Together, we will develop a completely customized plan to help you meet your own health and wellness goals both short and long term.</p>
          </div>
          <div className='button-div'>
            <CtaButton buttonText={'work with Kristen'} linkAddress={'schedule'}/>
          </div>
        </div>

        <div className='card down'>
          <div className='card-top'>
            <img src={freeplan} className="infoImg" alt="get my free plan"></img>    
          </div>
          <div className='card-body'>
            <h2 className='title-two'>Are You Eating Clean?</h2>
            <p className='value-prop-summary'>Download my free 28 day meal guide to clean eating. You will receive simple tips that you can start to use including shopping lists and easy recipe ideas.
            </p>
          </div>
          <div className='button-div'>
            <CtaButton buttonText={'get the guide'} linkAddress={'emailsignup'}/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CardContainer