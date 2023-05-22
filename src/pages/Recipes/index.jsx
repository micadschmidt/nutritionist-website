import React from 'react';
import './style.css';
import RecipeCard from '../../components/RecipeCard';

const Recipes = () => {
  return (
    <main>
      <section className='blog-container'>
        <RecipeCard />
      </section>
    </main>
  )
}

export default Recipes;