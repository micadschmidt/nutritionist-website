import React from 'react'
import wwm from '../../assets/wwm.jpg'
import freeplan from '../../assets/freeplan.jpg'
import aboutimg from '../../assets/IMG_2450-min.jpeg'
import CtaButton from '../CtaButton';
// import { Link } from 'react-router-dom'
import './style.css'

const CardContainer = () => {
  return (
    <section>
      <div className='bg-gray'>
        <h1 className='title-two'>Comienza el Cambio Hoy</h1>
      </div>
      <div className='card-container'>

        <div className='card up'>
          <div className='card-top'>
            <img src={aboutimg} className="infoImg" alt="about kristen"></img>
          </div>
          <div className='card-body'>
            <h2 className='title-two'>Conoceme</h2>
            <p className='value-prop-summary'>Algo que te identifique que NO esté ya escrito en la pestaña de SOBRE MI.
            <hr />
            <del>As a certified yoga instructor and loving mom of four, I believe that peace can be found around food & body when we lead the journey with self-compassion. Your body has wisdom and is yearning for you to tune in to what it’s saying, and I am here to help!</del></p>
          </div>
          <div className='button-div'>
            <CtaButton
              buttonText={'Acerca de mi'}
              linkAddress={`about`}
            />
          </div>
        </div>

        <div className='card up'>
          <div className='card-top'>
            <img src={wwm} className="infoImg" alt="work with me"></img>
          </div>
          <div className='card-body'>
            <h2 className='title-two'>Contá conmingo</h2>
            <p className='value-prop-summary'>Aquí el motivo por el cual tu ayuda 1 a 1 y las consultas pueden ser de beneficio para multiples carencias/tipos de clientes.
            <hr />
            <del>Work with me one on one and we will focus on nutrition, gut health, sleep, stress management, and more. We will address obstacles and come up with solutions to set you up for success. Together, we will develop a completely customized plan to help you meet your own health and wellness goals both short and long term.</del></p>
          </div>
          <div className='button-div'>
            <CtaButton buttonText={'Comencemos'} linkAddress={'schedule'}/>
          </div>
        </div>

        <div className='card up'>
          <div className='card-top'>
            <img src={freeplan} className="infoImg" alt="get my free plan"></img>
          </div>
          <div className='card-body'>
            <h2 className='title-two'>Estás comiendo sano?</h2>
            <p className='value-prop-summary'>Aquí algun servicio que brindes, ej: PDF, video, etc
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
