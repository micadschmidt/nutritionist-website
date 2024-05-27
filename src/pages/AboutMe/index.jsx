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
          <h1 className='title-two'>¡Hola! Soy Camila Rosenbrock</h1>
          <p className='bio-item'>Soy nutricionista certificada por la Universidad Adventista del Plata, Argentina,  y especialista avalada por el Instituto Deporte y Vida.
          Soy una apasionada por ayudar a las personas a alcanzar sus metas de salud y bienestar a través de la <strong>alimentación adecuada y un estilo de vida saludable.</strong></p>
          <p className='bio-item'> Con 6 de experiencia en el campo de la nutrición, he tenido el privilegio de trabajar con personas de todas las edades y diversos trasfondos para mejorar su calidad de vida a través de la nutrición.</p>
          {/* <h2 className='title-two about'>My education and training include:</h2>
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
          </ul> */}
          <h3 className='title-two about'>Algo de tu formacion / ideologia que te haga única en tu area</h3>
          <p className='bio-item'>
            <del>Functional nutrition determines how and why our body’s imbalances occur and restores health by addressing the root causes of these imbalances for each individual.</del>
          </p>
          <p className='bio-item'>
            <del>The functional medicine model for nutrition is an individualized, client-centered, science-based framework which considers genetic, biochemical, and lifestyle factors which will guide our work together to help achieve your optimal health.</del>
          </p>
          <p className='bio-item'>
            <del>By addressing root cause, rather than symptoms, we can get a better understanding of the complexity of client conditions. One condition may have many different causes and, one cause many different conditions. Everyone’s path to wellness is unique and I look forward to helping you along it.</del>
          </p>
        </div>
      </div>
      <DiscoverySession />
    </>
  )
}

export default AboutMe
