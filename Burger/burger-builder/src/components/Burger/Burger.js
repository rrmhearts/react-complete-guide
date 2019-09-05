import React from 'react';

import classes from './Burger.module.css';
import Ingredient from './Ingredients/Ingredient';

const burger = (props) => {
    let transIngredients = Object.keys(props.ingredients) // array of strings of keys
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { // each number val is array length.
                return <Ingredient key={igKey + i} type={igKey} /> // return this for each number given 0..props
            });
        }) // returns array of arrays [ings][#each ing]
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []); // reduces to [#each ing]
    console.log(transIngredients);
    if (transIngredients.length === 0) {
        transIngredients = <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {transIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default burger;