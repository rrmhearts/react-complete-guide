import React from 'react';

import Modal from '../../UI/Modal/Modal';

/*
    Component passed to this function.
    Binds WrappedComponent to inner function return.
*/
const withErrorHandler = (WrappedComponent, axios) => { // normally props are passed here.

    // return a FUNCTION which will be the "functional component" that takes props.
    return (props) => { // functional component.
        return ( 
            <React.Fragment>
                <Modal show>
                    Something didn't work. Apologize.
                </Modal>
                <WrappedComponent {...props} /> 
            </React.Fragment>
        );
    }
}

export default withErrorHandler;