import React from 'react'
import './style.css'
import CtaButton from '../CtaButton';

const DiscoverySession = () => {
  return (
    <>
      <article className='discover'>
        <h1 className='title discover-title'>Ponete en contacto hoy para obtener la primera consulta GRATIS!</h1>
      <CtaButton
        buttonText="El cambio es hoy"
        linkAddress="/contact"
      />
      </article>
    </>
  )
}

export default DiscoverySession
