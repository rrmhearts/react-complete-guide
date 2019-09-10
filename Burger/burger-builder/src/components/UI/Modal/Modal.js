import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    // Also could use functional component with Memo.
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || // Prevents update on children like loader
            nextProps.children !== this.props.children; // fix
    }

    componentWillUpdate() {
        console.log("[Modal] Will update.");
    }

    render () {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}
export default Modal;
