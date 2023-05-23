import React from 'react'
import { useLocation } from 'react-router-dom';
import DiscoverySession from '../../components/DiscoveryAsk';
import './style.css'

const BlogPost = () => {

  const location = useLocation()
  const { blogTitle, markdown } = location.state
  const newMark = markdown.split("\n")

  const firstChar = (textVal, i) => {
    const characterOne = textVal.split('')
    if(isNaN(parseInt(characterOne[6])) && characterOne[6] !== '•') {
      return (<p className='value-prop-summary' key={i}>{textVal}</p>)
    } else if(!isNaN(parseInt(characterOne[6]))) {
      return (<p className='post-section-heading' key={i}>{textVal}</p>)
    } else {
      return (<p className='value-prop-summary indented' key={i}>{textVal}</p>)
    }
  }
  
  return (
    <div className='post-container'>
      <div className='post'>
        <h1 className='blog'>{blogTitle}</h1>
        {newMark.map((paragraph, i) => (
          firstChar(paragraph, i)
        ))}
      </div>
      <DiscoverySession />
    </div>
  )
}

export default BlogPost