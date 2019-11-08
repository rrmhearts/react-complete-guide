import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  // can also use notation `function Ingredients () {}`

  /* list of ingredients */
  const [userIngredients, setUserIngredients] = useState([]);

  /* form can add an ingredient to the list */
  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients, /* prevIngrdients list */
      { id: Math.random().toString(), ...ingredient } /* ingredient is an object */
    ]);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Ingredients;
