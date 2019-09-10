import React, { Component } from 'react';

import Modal from '../../UI/Modal/Modal';

/*
    Component passed to this function.
    Binds WrappedComponent to inner function return.
*/
const withErrorHandler = (WrappedComponent, axios) => { // normally props are passed here.

    // return a FUNCTION which will be the "functional component" that takes props.
    return class extends Component {
        state = {
            error: null
        }

        // Now this will be called before Burger Builder setup, so error handler will work..
        componentWillMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            axios.interceptors.response.use(res=>res, error => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render() {
            return ( 
                <React.Fragment>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} /> 
                </React.Fragment>
            );
        }
    }
}

export default withErrorHandler;