import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props; /* object destructuring */

  // Set up with State.
  const [enteredFilter, setEnteredFilter] = useState('');

  /*
    Will automatically occur when state changes. 
    When search box changes, do this.
    */
  useEffect(() => {
    // firebase support query parameters
    const query =
      enteredFilter.length === 0
        ? ''
        : `?orderBy="title"&startAt="${enteredFilter}"&endAt="${enteredFilter+"\uf8ff"}"`; // sort by title, filter by enteredFilter
    // make call, requires firebase rules change
    fetch('https://react-hooks-248c2.firebaseio.com/ingredients.json' + query)
      .then(response => response.json())
      .then(responseData => {
        const loadedIngredients = [];
        for (const key in responseData) { // all of this is the same as the other fetch calls.
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          });
        }
        onLoadIngredients(loadedIngredients);
      });
  }, [enteredFilter, onLoadIngredients]); /*only if onLoadIngredients changes. */
  /* onLoadIngredients is recreated every time Ingredients function runs. */
  /* this is prevented by using useCallback hook around function in Ingredients! Prevents infinite loop! */

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)} /* on filter value change, update state */
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
