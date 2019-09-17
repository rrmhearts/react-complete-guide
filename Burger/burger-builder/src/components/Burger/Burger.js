import React from 'react';

// allows access to route info in props.
import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const burger = ( props ) => {

    // No route info here.
    console.log(props);

    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <Ingredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {transformedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);