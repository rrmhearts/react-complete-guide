import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
/*
    Stateless is good practice.
*/
class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        //document.querySelector('input').focus(); works on entire dom.
        //this.inputElement.focus(); // focuses on last input
        this.inputElementRef.current.focus();
    }
    render() {
        console.log("[Person.js] rendering...")
        return ( // Aux is wrapper without div. Returning one expression. ReactFragment replaces Aux.
            <React.Fragment> 
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please login!</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </React.Fragment>
        );
    }
}

// React will watch and give warning if props are incorrect types.
// Console warnings if component is distributed to other developers.
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);