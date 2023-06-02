import React from 'react'
import './style.css'
import CtaButton from '../../components/CtaButton'
import Logo from '../../assets/nutrigenomix.png'

function Testing() {
  return (
    <section className='wwm-container'>
      <img className='nutrigenomix-logo' src={Logo} alt="nutrigenomix logo" />
      <div className='textContainer-two'>
        <h1 className='title'>Genetic Testing for Personalized Nutrition</h1>
        <p className='bio-item'>70-Gene Health and Wellness Test</p>
        <p className='bio-item'>Nutrigenomix is widely regarded as the global leader in genetic testing for personalized nutrition. They have developed an award-winning panel of genetic tests exclusively for use by healthcare professionals. The company was founded by leading researchers in the field of nutrigenomics and personalized nutrition, and their genetic tests were developed according to stringent standards of scientific evidence. For more information on what makes them different, please refer to the About Nutrigenomix informational pamphlet.</p>
        <h2 className='title-two about'>What are the differences in the tests?</h2>

          <p className='bio-item'>While all tests report the same genetic markers, each test is intended for a different clientele.</p>

            <p className='value-prop-summary indented'>
              •	The Health test focuses on achieving optimal health for individuals who are pursuing general well-being. For example, these individuals may be interested in weight management, and improvements in cardiometabolic health and fitness.
            </p>

            <p className='value-prop-summary indented'>
              •	The Sport test is designed to provide nutrition and performance-related recommendations that will help active individuals and athletes boost physical and mental performance while optimizing body composition and nutritional status.
            </p>

            <p className='value-prop-summary indented'>
              •	The Fertility test is designed to provide nutrition recommendations that will help individuals (male or female) who are trying to conceive by optimizing their fertility potential.
            </p>

            <p className='value-prop-summary indented'>
              •	The Plant-Based test focuses on achieving optimal health and well-being for individuals following a vegetarian or vegan diet.
            </p>

        <h3 className='title-two about'>Examples of differences in the tests</h3>
        <p className='value-prop-summary'>
          Caffeine is a great example. Although the CYP1A2 gene is analyzed for caffeine metabolism in all tests, each report focuses on different information and provides different recommendations depending on your client’s goals. The Health and Plant-Based reports focus on risk of heart attack and hypertension based on caffeine consumption and your client’s genotype. The Sport report highlights the effects of caffeine on endurance performance, while still identifying potential risks to heart health. The Fertility report focuses on caffeine’s effects on time to establish pregnancy, as well as pregnancy-associated health conditions such as pre-diabetes and hypertension. Your recommendations would essentially be the same regardless of which report you ordered, but the implications would depend on your client’s interest. So, if you are a ‘slow’ metabolizer of caffeine, you would be advised to limit your caffeine intake to no more than 200 mg/day to reduce your risk of cardiovascular disease (e.g., Health or Plant-Based report) or to optimize your performance (e.g. Sport Report). The exception would be the Fertility report, where the recommendation is to limit your intake to no more than 100 mg/day based on the science linking caffeine to pregnancy outcomes.
        </p>
      </div>
      <section className='testing-button-container'>
        <article>
          <CtaButton
            buttonText="Download Brochure Here"
            linkAddress="https://nutrigenomix.com/storage/pages/about-nutrigenomix.pdf"
            newTab={true}
          />
        </article>
      <article className='video-container'>
        <iframe src="https://www.youtube.com/embed/Sn7mdcoRiQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </article>
      </section>
      <section className='textContainer-two'>
        <h3 className='title-two about'>Additional Testing</h3>
        <section className='wwm-section-flex-other'>
          <article>
            <ul>
              <li className='indented'>
                <p className='value-prop-summary'>Adrenal & Stress</p>
              </li>
              <li className='indented'>
                <p className='value-prop-summary'>Allergies & Sensitivities</p>
              </li>
              <li className='indented'>
                <p className='value-prop-summary'>Autoimmune</p>
              </li>
              <li className='indented'>
                <p className='value-prop-summary'>Female Health</p>
              </li>
              <li className='indented'>
                <p className='value-prop-summary'>Gastrointestinal</p>
              </li>
            </ul>
          </article>
          <article>
            <ul>
              <li className='indented'>
                <p className='value-prop-summary'>Hormones</p>
              </li>
              <li className='indented'>
                <p className='value-prop-summary'>Male Health</p>
              </li>
              <li className='indented'>
                <p className='value-prop-summary'>Metabolic Function</p>
              </li>
              <li className='indented'>
                <p className='value-prop-summary'>Oxidative Stress</p>
              </li>
              <li className='indented'>
                <p className='value-prop-summary'>Sleep</p>
              </li>
            </ul>
          </article>
        </section>
      </section>
    </section>
  )
}

export default Testing