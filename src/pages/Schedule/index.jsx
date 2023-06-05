import React from 'react'
import './style.css'
import DiscoverySession from '../../components/DiscoveryAsk';
import SmallHero from '../../components/SmallHero';
import Pantry from '../../assets/pantry.jpg';
import Cooking from '../../assets/cooking.jpg';
import WWM2 from '../../assets/wwm2.jpg';

const Schedule = () => {
  return (
    <div>
    <SmallHero />
    <div className='wwm-container'>
      <section className='technical-stuff'>
        <h1 className='title-two' style={{textAlign: "center"}}>Work with me</h1>
        <p className='value-prop-summary'>In each one-on-one session, we will focus on nutrition, gut health, sleep, stress management, and more. We will address obstacles and come up with solutions to set you up for success. Together, we will develop a completely customized plan to help you meet your own health and wellness goals both short and long term. This is not a &#x2018;one-size-fits-all&#x2019; approach. Sessions can be held in person, via a secure web-based virtual platform or by phone.</p>
      </section>
      <section className='wwm-section-flex-with-img'>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Starter Package</p>
          <p className='value-prop-summary'>It can be difficult to determine the best plan to help you achieve your goals. Because everyone is different, we will tailor this Starter program around your goals, your lifestyle, eating habits, body composition, and metabolism. Together we will navigate and address the challenges that inevitably arise.</p>
        </article>
        <figure className='fig-img'>
          <img src={WWM2} style={{opacity: '.7'}} alt="woman in a pantry" />
        </figure>
      </section>
      <section className="wwm-section">
        <article className='small-section'>
          <p className='value-prop-summary title-three'>This package includes 3 sessions:</p>
          <p className='value-prop-summary title-four'>90-minute initial consultation which includes:</p>  
          <p className='value-prop-summary indented'>•	In-depth and thorough evaluation of your nutritional status, including a 3-day food log and medication /supplementation review</p>
          <p className='value-prop-summary indented'>•	Assessment of daily activity level, energy demands, stress, sleep, and complete lifestyle review</p>
          <p className='value-prop-summary indented'>•	Complete evaluation and review of health history</p>
          <p className='value-prop-summary indented'>•	Provide client tailored educational information to start improving your wellness goals immediately</p>
          <p className='value-prop-summary indented'>•	Functional testing options will be reviewed and recommended for specific health related issues.</p>
          <p className='value-prop-summary title-four'>Two 45 minute followup sessions</p>
          <p className='value-prop-summary indented'>Follow ups begin with a review and evaluation of the progress made from our previous session. We will build upon what worked and adjust what did not, allowing us to set and accomplish goals in a way that is empowering and exciting.</p>
        </article>
      </section>
      <div className='disc-div'>
        <DiscoverySession />
      </div>
      <section className='wwm-section-flex'>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Foundational Package</p>
          <p className='value-prop-summary indented'>
          This program includes everything in the Starter Package, allowing us the opportunity to work together for a total of 5 sessions building upon the nutritional foundation already established. Real and lasting changes occur over a longer period of time.</p>
          <p className='value-prop-summary title-four'>*Discounts apply to this package</p>
        </article>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Follow-up Session</p>
          <p className='value-prop-summary indented'>Perfect for clients previously enrolled in the Starter Package or the Foundational Package. In this session we will check in on your nutritional progress by reviewing what you learned before and discussing your successes and challenges. Recommendations will be made as needed.</p>
        </article>
      </section>
      <section className='wwm-section-flex-with-img'>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Pantry Audit/Makeover</p>
          <p className='value-prop-summary indented'>In this one-hour session, we will work together to go through your pantry and/or refrigerator and make decisions on what can stay and what has to go. You will end the session feeling more confident on how to shop the grocery store aisles and how to read the labels on your food.</p>
        </article>
        <figure className='fig-img'>
          <img src={Pantry} style={{opacity: '.7'}} alt="woman in a pantry" />
        </figure>
      </section>
      <div className='disc-div'>
        <DiscoverySession />
      </div>
      <section className='wwm-section-flex'>
        <article className='small-section'>
            <p className='value-prop-summary title-three'>Supermarket Tours</p>
            <p className='value-prop-summary indented'>Let&#x2019;s go shopping! We will go food shopping together and learn what kind of foods you should be shopping for and what to avoid. This is a great way to learn how to read labels, compare choices, and learn about food shelf placement.</p>
        </article>
        <article className='small-section'>
            <p className='value-prop-summary title-three'>Personalized Meal Planning</p>
            <p className='value-prop-summary indented'>Customized personal meal planning based on dietary restrictions, personal preferences, food sensitivities and intolerances, specific diets (Keto, Paleo, Mediterranean, FODMAP, Plant Based, etc.) and medical conditions (diabetes, cholesterol, obesity, etc). Shopping guides and easy to follow recipes help take the stress out of what&#x2019;s for dinner.</p>
        </article>
      </section>
      <section className='wwm-section-flex-with-img'>
        <figure className='fig-img'>
          <img src={Cooking} style={{opacity: '.7'}} alt="vegetables and a person's hands cutting vegetables" />
        </figure>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Cooking 101</p>
          <p className='value-prop-summary indented'>Hate to cook? Love delivery and eating out? I can help. I will come to your kitchen and give you simple tips on creating healthy meals that your entire family can enjoy. Cooking can be easy, safe, and fun! </p>
        </article>
      </section>
      <section className='wwm-section'>
        <p className='value-prop-summary title-three'>Workshops</p>
        <p className='value-prop-summary indented'>Group sessions are a great way to educate and promote healthy eating to a larger audience. On location workshops can reach many individuals at the same time addressing a common area of nutritional concern. Examples of topics of interest may be how nutrition plays a role in the health of the gut, hormones, adrenals, sleep, and allergies/sensitivities.</p>
      </section>
      <div className='disc-div'>
        <DiscoverySession />
      </div>      
    </div>
    </div>
  )
}

export default Schedule