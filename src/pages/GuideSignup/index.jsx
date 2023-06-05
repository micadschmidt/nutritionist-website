import React from 'react';
import HubspotContactForm from '../../components/HubspotContactForm';
// import HubspotForm from 'react-hubspot-form'
import './style.css'

const GuideSignup = () => {

  return (
    <section className='wwm-container'>
    <div className='textContainer'>
      <h1 className='title-two'>Are You Eating Clean?</h1>
      <p className='value-prop-summary' style={{marginBottom: "30px"}}>Download my free guide to clean eating. You will receive simple tips that you can start to use including shopping lists and easy recipe ideas.</p>
      <HubspotContactForm />
      {/* <HubspotForm 

      /> */}
      <p className='value-prop-summary' style={{marginBottom: "30px"}}>*Disclosure: This form collects information we will use to send you updates about promotions, special offers, and news. We will not share or sell your personal information. By providing your email address you consent to receive emails from us. You can unsubscribe at any time. </p>
    </div>
    </section>
  )
};

export default GuideSignup;