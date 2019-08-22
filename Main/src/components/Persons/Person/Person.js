import React, {Component} from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
// import Aux from '../../../hoc/Aux';
/*
    Stateless is good practice.
*/
class Person extends Component {
    render() {
        console.log("[Person.js] rendering...")
        return ( // Aux is wrapper without div. Returning one expression. ReactFragment replaces Aux.
            <React.Fragment> 
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </React.Fragment>
        );
    }
};

export default withClass(Person, classes.Person);