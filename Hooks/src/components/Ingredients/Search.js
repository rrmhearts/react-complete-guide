import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef(); // creates reference to a dom element.

  useEffect(() => {
    // wait until user stops typing before checking the server.
    const timer = setTimeout(() => {
      if (enteredFilter /*value when timer set*/=== inputRef.current.value /*current value, current is useRef object*/) {
        const query =
          enteredFilter.length === 0 
            ? ''
            : `?orderBy="title"&startAt="${enteredFilter}"&endAt="${enteredFilter+"\uf8ff"}"`; // sort by title, filter by enteredFilter
        // make call, requires firebase rules change
        fetch('https://react-hooks-248c2.firebaseio.com/ingredients.json' + query)
          .then(response => response.json())
          .then(responseData => {
            const loadedIngredients = [];
                for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount
              });
            }
            onLoadIngredients(loadedIngredients);
          });
      } // if enterfilter is inputRef value (value hasn't changed)
    }, 500); // wait 500 ms of pause typing before checking server.
    return () => {
      // this return must be a function. it is clean up that occurs before the NEXT time useEffect runs.
      // clear previous timer
      clearTimeout(timer); // before new timer is applied. ensures 1 timer.
    };
  }, [enteredFilter, onLoadIngredients, inputRef]); // depency on changing inputRef

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef} /* assign ref to this dom element*/
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
