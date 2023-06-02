import React, { useState } from 'react'
import { validateEmail } from '../../utils/index';
import './style.css'

const Contact = () => {
    const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    message: '',
    concerns: '',
  })
    const { firstName, lastName, email, phone, concerns } = formState;

    const [errorMessage, setErrorMessage] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [fNameError, setFNameError] = useState('')
    const [lNameError, setLNameError] = useState('')

    const handleChange = (e) => {
    
      if(e.target.name === 'email'){
        const isValid = validateEmail(e.target.value);
        if(!isValid) {
          setEmailError('Your email is invalid')
          setErrorMessage(true)
        } else {
          setEmailError('')
          setErrorMessage(false)
        }
      } else {
        switch(e.target.name) {
          case "First Name":
            if (!e.target.value.length) {
              setFNameError(`Please enter your first name`)
              setErrorMessage(true)
            } else {
              setFNameError('')
              setErrorMessage(false)
            }
            break;
          case "Last Name":
            if (!e.target.value.length) {
              setLNameError(`Please enter your last name`)
              setErrorMessage(true)
            } else {
              setLNameError('')
              setErrorMessage(false)
            }
            break;
          // case "phone":
          //   if (!e.target.value.length) {
          //     setPhoneError(`Please enter your phone number`)
          //     setErrorMessage(true)
          //   } else {
          //     setPhoneError('')
          //     setErrorMessage(false)
          //   }
          //   break;
          // case "address1":
          //   if (!e.target.value.length) {
          //     setAddressError(`Please enter your address`)
          //     setErrorMessage(true)
          //   } else {
          //     setAddressError('')
          //     setErrorMessage(false)
          //   }
          //   break;
          // case "city":
          //   if (!e.target.value.length) {
          //     setCityError(`Please enter your city`)
          //     setErrorMessage(true)
          //   } else {
          //     setCityError('')
          //     setErrorMessage(false)
          //   }
          //   break;
          // case "state":
          //   if (!e.target.value.length) {
          //     setStateError(`Please enter your state`)
          //     setErrorMessage(true)
          //   } else {
          //     setStateError('')
          //     setErrorMessage(false)
          //   }
          //   break;
          // case "zip":
          //   if (!e.target.value.length) {
          //     setZipError(`Please enter your zip code`)
          //     setErrorMessage(true)
          //   } else {
          //     setZipError('')
          //     setErrorMessage(false)
          //   }
          //   break;
        }
    } 

    if(!errorMessage){
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      })
    }
  }

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setContactSelected(false)
    // }

  return (
    <div className='wwm-container'>
      <section className='technical-stuff'>
        <h1 className='title-two'>Let's Get Started!</h1>
        <p className='value-prop-summary'>I am pleased to provide you with a Complementary 15-minute Discovery call to meet you and learn about your health, wellness, and nutritional concerns. This is a time for us to assess how we could work together. Given that we are a good fit, we will discuss my recommendations for moving forward and booking your 90-minute initial consultation. I am happy to meet with you in person, over the phone, or via zoom. Please use the form below or email me directly at <span><a style={{textTransform: "none"}} href="mailto:Kristen@TheNutritionalNest.com">Kristen@TheNutritionalNest.com</a></span></p>
      </section>
      <form className="contact-form" name="contact" method="POST"  onSubmit="submit" action="/success" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <p>First Name <span>*</span></p>
          <label htmlFor="firstName"></label>
          <input type="text" defaultValue={firstName} onBlur={handleChange} name="First Name"/>
        {fNameError && (
          <p className="error-text">{fNameError}</p>
        )}
        </div>
        <div>
          <p>Last Name <span>*</span></p>
          <label htmlFor="lastName"></label>
          <input type="text" defaultValue={lastName} onBlur={handleChange} name="Last Name" />
        {lNameError && (
          <p className="error-text">{lNameError}</p>
        )}
        </div>
        <div>
          <p>Email Address <span>*</span></p>
          <label htmlFor="email"></label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
        {emailError && (
          <p className="error-text">{emailError}</p>
        )}
        </div>
        <div>
          <p>Phone Number</p>
          <label htmlFor="phone"></label>
          <input type="phone" defaultValue={phone} onBlur={handleChange} name="phone"/>
        </div>
        {/* <div>
          <p>Address Line 1 <span>*</span></p>
          <label htmlFor="address1"></label>
          <input type="text" defaultValue={address1} onBlur={handleChange} name="address1"/>
        {addressError && (
          <p className="error-text">{addressError}</p>
        )}
        </div>
        <div>
          <p>Address Line 2</p>
          <label htmlFor="address2"></label>
          <input type="text" defaultValue={address2} name="address2"/>
        </div>
        <div>
          <p>City <span>*</span></p>
          <label htmlFor="city"></label>
          <input type="text" defaultValue={city} onBlur={handleChange} name="city"/>
          {cityError && (
            <p className="error-text">{cityError}</p>
          )}
        </div>
        <div>
          <p>State <span>*</span></p>
          <label htmlFor="state"></label>
          <input type="text" defaultValue={state} onBlur={handleChange} name="state"/>
          {stateError && (
          <p className="error-text">{stateError}</p>
        )}
        </div>
        <div>
          <p>Zip Code <span>*</span></p>
          <label htmlFor="zip"></label>
          <input type="text" defaultValue={zip} onBlur={handleChange} name="zip"/>
          {zipError && (
            <p className="error-text">{zipError}</p>
          )}
        </div> */}
        {/* <div>
          <p>What area are you primarily looking for help in</p>
          <label htmlFor="message"></label>
          <textarea name="message" defaultValue={message} rows="5"/>
        </div> */}
        <div>
          <p>What are your primary nutritional/health concerns</p>
          <label htmlFor="concerns"></label>
          <textarea name="concerns" defaultValue={concerns} rows="5"/>
        </div>
        <button type="submit" value="Submit message" className="cta-button">send request</button>
      </form>
    </div>
  )
}

export default Contact