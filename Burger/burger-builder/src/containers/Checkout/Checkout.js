import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {

        // Dummy data.
        ingredients: {
            salad: 1,
            cheese:1,
            meat:1,
            bacon: 1
        }
    }

    componentDidMount() {
        // URL Example http://localhost:3000/checkout?bacon=0&cheese=1&meat=1&salad=1
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            // Array size 2 ["bacon", "0"]
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutCancel = () => {
        // Back to previous page.
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancel}
                    checkoutContinue={this.checkoutContinue}/>
            </div>
        );
    }
}

export default Checkout;