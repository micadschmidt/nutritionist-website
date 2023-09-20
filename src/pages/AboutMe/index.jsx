import React from 'react'
import kristen from '../../assets/Kristen_0075ed-min.jpg'
import DiscoverySession from '../../components/DiscoveryAsk';
import './style.css'

const AboutMe = () => {
  return (
    <>
      <div className='content-container'>

        <div className='imgContainer'>
          <figure className='shadow'>
            <img src={kristen} className='main-image' alt="kristen poleski"></img>
          </figure>
          {/* <img></img> */}
        </div>

        <div className='textContainer'>
          <h1 className='title-two'>Hi, I'm Cami Rosenbrock, MS</h1>
          <p className='bio-item'>I am an Integrative & Functional Clinical Nutritionist and Health Coach. My mission is to help you heal your body through a holistic, science-based, root cause approach which takes into consideration your lifestyle factors such as food, sleep, stress, family, fitness, and spirituality.</p>
          <p className='bio-item'>As a certified yoga instructor and loving mom of four, I believe that peace can be found around food & body when we lead the journey with self-compassion. Your body has wisdom and is yearning for you to tune in to what it’s saying, and I am here to help!</p>
          <h2 className='title-two about'>My education and training include:</h2>
          <ul className='indented'>
            <li>
              <p className='bio-item'>
                Bachelor of Science degree from Penn State University
              </p>
            </li>
            <li>
              <p className='bio-item'>
                Master of Science in Clinical Nutrition from Maryland University of Integrative Health
              </p>
            </li>
            <li>
              <p className='bio-item'>
                200-hour Yoga Teacher Certification from Kripalu Center for Yoga & Health
              </p>
            </li>
            <li>
              <p className='bio-item'>
                SERV Safe Certification
              </p>
            </li>
          </ul>
          <h3 className='title-two about'>What is the Functional Nutritional approach?</h3>
          <p className='bio-item'>
            Functional nutrition determines how and why our body’s imbalances occur and restores health by addressing the root causes of these imbalances for each individual.
          </p>
          <p className='bio-item'>
            The functional medicine model for nutrition is an individualized, client-centered, science-based framework which considers genetic, biochemical, and lifestyle factors which will guide our work together to help achieve your optimal health.
          </p>
          <p className='bio-item'>
            By addressing root cause, rather than symptoms, we can get a better understanding of the complexity of client conditions. One condition may have many different causes and, one cause many different conditions. Everyone’s path to wellness is unique and I look forward to helping you along it.
          </p>
        </div>
      </div>
      <DiscoverySession />
    </>
  )
}

export default AboutMe
