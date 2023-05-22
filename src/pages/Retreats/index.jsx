import React from 'react'
import Retreat from '../../assets/retreat.jpg'
import './style.css'

const Retreats = () => {
  return (
    <section className='retreat-container'>
      <img src={Retreat} alt="woman on a rock looking out from the mountains" />
      <h2>Stay tuned for late 2023/early 2024!</h2>
    </section>
  )
}

export default Retreats