import React from 'react';
import './style.css';
import RecipeCard from '../../components/RecipeCard';

const Recipes = () => {
  return (
    <main>
      <section className='blog-container'>
        <h1>Recipes</h1>
        <RecipeCard />
      </section>
    </main>
  )
}

export default Recipes;