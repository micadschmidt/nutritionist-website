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
        <h1 className='title-two' style={{textAlign: "center"}}>Mis servicios</h1>
        <p className='value-prop-summary'>Algo de info acerca de como pensas que tus servicios pueden ser de beneficio para el cliente del otro lado de la pantalla</p>
      </section>
      <section className='wwm-section-flex-with-img'>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Asesoramiento Nutricional Personalizado Presencial u Online</p>
          <p className='value-prop-summary'>Cada individuo es único, por lo que mis programas de asesoramiento nutricional están diseñados para satisfacer las necesidades específicas de cada cliente. Desde la pérdida de peso hasta el manejo de enfermedades crónicas, estoy aquí para ayudarte a alcanzar tus objetivos de salud.</p>
        </article>
        <figure className='fig-img'>
          <img src={WWM2} style={{opacity: '.7'}} alt="woman in a pantry" />
        </figure>
      </section>
      <section className='wwm-section-flex-with-img'>
        <figure className='fig-img'>
          <img src={Cooking} style={{opacity: '.7'}} alt="vegetables and a person's hands cutting vegetables" />
        </figure>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Planificación de Dietas y Menús</p>
          <p className='value-prop-summary indented'>Te ayudaré a crear planes de comidas equilibrados y deliciosos que se adapten a tus preferencias alimenticias y objetivos de salud. Podrás contar con todo lo necesario para llevarlo a cabo y alcanzar tus objetivos efectivamente.</p>
        </article>
      </section>
      {/* <section className="wwm-section">
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
      </section> */}
      <div className='disc-div'>
        <DiscoverySession />
      </div>
      {/* <section className='wwm-section-flex'>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Planificación de Dietas y Menús</p>
          <p className='value-prop-summary indented'>
          Te ayudaré a crear planes de comidas equilibrados y deliciosos que se adapten a tus preferencias alimenticias y objetivos de salud. Podrás contar con todo lo necesario para llevarlo a cabo y alcanzar tus objetivos efectivamente.</p>
        </article>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Educación Nutricional</p>
          <p className='value-prop-summary indented'>Creo en empoderar a mis clientes con el conocimiento necesario para tomar decisiones informadas sobre su alimentación. Ofrezco sesiones educativas individuales y grupales para abordar temas relacionados con la nutrición y el bienestar.</p>
        </article>
      </section> */}
      <section className='wwm-section-flex-with-img'>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Seguimiento y Apoyo Continuo</p>
          <p className='value-prop-summary indented'>Mi compromiso no termina después de nuestra primera consulta. Estoy aquí para brindarte apoyo continuo a lo largo de tu viaje hacia una vida más saludable. Juntos, podemos superar los desafíos y celebrar tus logros.</p>
        </article>
        <figure className='fig-img'>
          <img src={Pantry} style={{opacity: '.7'}} alt="woman in a pantry" />
        </figure>
      </section>
      <section className='wwm-section-flex-with-img'>
        <figure className='fig-img'>
          <img src={Cooking} style={{opacity: '.7'}} alt="vegetables and a person's hands cutting vegetables" />
        </figure>
        <article className='small-section'>
          <p className='value-prop-summary title-three'>Educación Nutricional</p>
          <p className='value-prop-summary indented'>Creo en empoderar a mis clientes con el conocimiento necesario para tomar decisiones informadas sobre su alimentación. Ofrezco sesiones educativas individuales y grupales para abordar temas relacionados con la nutrición y el bienestar.</p>
        </article>
      </section>
      <div className='disc-div'>
        <DiscoverySession />
      </div>
      {/* <section className='wwm-section-flex'>
        <article className='small-section'>
            <p className='value-prop-summary title-three'>Supermarket Tours</p>
            <p className='value-prop-summary indented'>Let&#x2019;s go shopping! We will go food shopping together and learn what kind of foods you should be shopping for and what to avoid. This is a great way to learn how to read labels, compare choices, and learn about food shelf placement.</p>
        </article>
        <article className='small-section'>
            <p className='value-prop-summary title-three'>Personalized Meal Planning</p>
            <p className='value-prop-summary indented'>Customized personal meal planning based on dietary restrictions, personal preferences, food sensitivities and intolerances, specific diets (Keto, Paleo, Mediterranean, FODMAP, Plant Based, etc.) and medical conditions (diabetes, cholesterol, obesity, etc). Shopping guides and easy to follow recipes help take the stress out of what&#x2019;s for dinner.</p>
        </article>
      </section>

      <section className='wwm-section'>
        <p className='value-prop-summary title-three'>Workshops</p>
        <p className='value-prop-summary indented'>Group sessions are a great way to educate and promote healthy eating to a larger audience. On location workshops can reach many individuals at the same time addressing a common area of nutritional concern. Examples of topics of interest may be how nutrition plays a role in the health of the gut, hormones, adrenals, sleep, and allergies/sensitivities.</p>
      </section>
      <div className='disc-div'>
        <DiscoverySession />
      </div> */}
    </div>
    </div>
  )
}

export default Schedule
