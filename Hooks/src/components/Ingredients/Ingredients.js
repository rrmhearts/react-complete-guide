import React, { useState, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  /*
    Manage SIDE EFFECTS like HTTP requests. Using to fetch data.
    Occurs every render cycle. AFTER every render cycle.

    Fetch without use effect will delay re-render.
  */
  useEffect(() => {

    // Get ingredients
    fetch('https://react-hooks-248c2.firebaseio.com/ingredients.json')
      .then(response => response.json())
      .then(responseData => {
        const loadedIngredients = [];
        // for each item in database.
        for (const key in responseData) {
          loadedIngredients.push({
            id: key, /* unique id from firebase */
            title: responseData[key].title, /* access json at key */
            amount: responseData[key].amount
          });
        }
        // AFTER request, update state. Have to render, infinite loop.
        // Must use inside useEffect WITH 2nd argument.
        setUserIngredients(loadedIngredients);
      });
  }, []); // only if 2nd arg CHANGES DO YOU RERENDER. Empty array, runs once acts like componentDidMount.

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]); // specify dependencies. will onlly run when userIngredients CHANGES.

  /* Async call, but delays rerender to fetch data.*/
  const addIngredientHandler = ingredient => {

    // Browser Function to make HTTP request.
    fetch('https://react-hooks-248c2.firebaseio.com/ingredients.json', {
      method: 'POST', // by default makes GET request. set to POST to post ingredients.
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json(); // returns promise
      })
      .then(responseData => { // process promise ^^ returned
        setUserIngredients(prevIngredients => [
          ...prevIngredients,
          { id: responseData.name /*firebase property uniq*/, ...ingredient }
        ]);
      });
  };

  const removeIngredientHandler = ingredientId => {
    setUserIngredients(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
