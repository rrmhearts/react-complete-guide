import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  // Set state, returns Getter and Setter, survives re-renders
  const [inputState, setInputState] = useState({ title: '', amount: '' });

  const submitHandler = event => {
    event.preventDefault();
    // ...
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
              value={inputState.title} /*state object*/
              onChange={event => {
                /* react reuses event states. Prevent reusing same event object */
                const newTitle = event.target.value;
                /* Setter example. Callback sets new values */
                setInputState(prevInputState => ({  /* pass latest state to ensure this gets it. */
                  title: newTitle, /* new event for each closure. WEIRD */
                  amount: prevInputState.amount /* must use both. replaces previous object; is closure */
                }));
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={event => {
                const newAmount = event.target.value;
                setInputState(prevInputState => ({
                  amount: newAmount,
                  title: prevInputState.title
                }));
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
