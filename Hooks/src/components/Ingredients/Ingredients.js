import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal'; // error handling box pops up.
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // is loading state.
  const [error, setError] = useState(); // for using ErrorModal popup box.

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = ingredient => {
    setIsLoading(true);
    fetch('https://react-hooks-248c2.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        setIsLoading(false);
        return response.json();
      })
      .then(responseData => {
        setUserIngredients(prevIngredients => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient }
        ]);
      })
      .catch(error => { // handling errors turn off spinner. Else it would keep spinning forever.
        setError('Add ingredient failed!');
        setIsLoading(false);
      });
  };

  const removeIngredientHandler = ingredientId => {
    setIsLoading(true); // for spinner

    // Really delete ingredients on server, not just locally. Using HTTP delete method
    fetch(
      `https://react-hooks-248c2.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: 'DELETE'
      }
    ).then(response => {
      setUserIngredients(prevIngredients =>
        prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
      );
      setIsLoading(false); // finished with spinner.
    }).catch(error => { // handling errors turn off spinner. Else it would keep spinning forever.
      setError('Remove ingredient failed!'); // these two will run together. There will only be 1 render cycle.
      setIsLoading(false);                   // because react will "batch" these two updates.
    });
  };

  const clearError = () => {
    setError(null);
  }

  return (
    <div className="App">
      {/*For displaying errors in add/remove ingredient.
         onClose will clear the error mesage and seError to null, thus no longer rendering here.
        */
        error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
