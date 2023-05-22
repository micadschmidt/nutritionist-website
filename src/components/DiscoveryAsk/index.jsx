import React from 'react'
import './style.css'
import CtaButton from '../CtaButton';

const DiscoverySession = () => {
  return (
    <>
      <article className='discover'>
        <h1 className='title discover-title'>Contact me for your free discovery session and get started on your path to wellness today!</h1>
      <CtaButton
        buttonText="Let's Get Started"
        linkAddress="/contact"
      />
      </article>
    </>
  )
}

export default DiscoverySession