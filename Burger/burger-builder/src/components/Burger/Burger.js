import React from 'react';

import classes from './Burger.module.css';
import Ingredient from './Ingredients/Ingredient';

const burger = (props) => {
    const transIngredients = Object.keys(props.ingredients) // array of strings of keys
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { // each number val is array length.
                return <Ingredient key={igKey + i} type={igKey} /> // return this for each number given 0..props
            });
        });
    console.log(transIngredients)
    return(
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {transIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default burger;