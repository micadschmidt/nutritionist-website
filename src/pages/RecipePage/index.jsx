import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import DiscoverySession from '../../components/DiscoveryAsk';

const RecipePost = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, []);

  const location = useLocation()
  const { recipeTitle, markdown } = location.state
  const newMark = markdown.split("\n")

  const firstChar = (textVal, i) => {
    const characterOne = textVal.split('')
    if(isNaN(parseInt(characterOne[6])) && characterOne[6] !== '•') {
      return (<p className='value-prop-summary' key={i}>{textVal}</p>)
    } else {
      return (<p className='value-prop-summary indented' key={i}>{textVal}</p>)
    }
  }
  
  return (
    <div className='post-container'>
      <div className='post'>
        <h1>{recipeTitle}</h1>
        {newMark.map((paragraph, i) => (
          firstChar(paragraph, i)
        ))}
      </div>
      <DiscoverySession />
    </div>
  )
}

export default RecipePost