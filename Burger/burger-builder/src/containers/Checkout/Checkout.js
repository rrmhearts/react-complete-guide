import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {

        // Dummy data.
        ingredients: null,
        totalPrice: 0
    }

    // Prior to rendering children, so ingredients gets populated.
    componentWillMount() {
        // URL Example http://localhost:3000/checkout?bacon=0&cheese=1&meat=1&salad=1
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // Array size 2 ["bacon", "0"]
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
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
                <Route 
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (
                        <ContactData ingredients={this.state.ingredients}
                                     price={this.state.totalPrice}
                                     {...props} />
                    )} />
            </div>
        );
    }
}

export default Checkout;