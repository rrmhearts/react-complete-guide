import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

// Make Loading = True.
export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        // Set loading to true.
        dispatch(purchaseBurgerStart());

        // Async order.
        axios.post( '/orders.json', orderData )
            .then( response => {
                // Set loading to false.
                console.log("Post", response);
                dispatch (purchaseBurgerSuccess(response.data.name, orderData ));
                // this.props.history.push( '/' ); No access to router
            } )
            .catch( error => {
                console.log("Post", error);
                // Set loading to false.
                dispatch (purchaseBurgerFail(error));
            } );
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}