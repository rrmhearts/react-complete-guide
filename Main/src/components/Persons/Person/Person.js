import React, {Component} from 'react';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
/*
    Stateless is good practice.
*/
class Person extends Component {
    render() {
        console.log("[Person.js] rendering...")
        return ( // Aux is wrapper without div. Returning one expression.
            <Aux> 
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
        /* [ // if you don't need wrapper structurally, avoid it.
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>,
                <p key="i2">{this.props.children}</p>,
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
        ] // array of elements instead of wrapper div.
        */
    }
};

export default Person;