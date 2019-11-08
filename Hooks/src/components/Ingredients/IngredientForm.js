import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

/*
 # 2 rules
 * must use in functional componenets or hooks
 * must use on root level in component. No in nested functions.
    * NO nested in if or loops either.
 */

const IngredientForm = React.memo(props => {
  /* doesn't have to be an object, and you can have multiple states. */
  const [enteredTitle, setEnteredTitle] = useState('');   /* one for title */
  const [enteredAmount, setEnteredAmount] = useState(''); /* one for amount */

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value); /* no longer have closure problem nor have to update amount */
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={event => {
                setEnteredAmount(event.target.value); /* no longer have closure problem nor have to update title */
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
