import React from 'react';

import classes from './CheckoutSummary.module.css';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkout = (props) => {
 return (
     <div className={classes.CheckoutSummary}>
         <h1>We hope it tastes delicious!</h1>
         <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
         </div>
         <Button btnType="Danger"
                 clicked={props.checkoutCancel}
         >CANCEL</Button>
         <Button btnType="Success"
                 clicked={props.checkoutContinue}>Continue</Button>

     </div>
 );
}

export default checkout;