import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFive}  />
            </div>
        );
    }
}

// Passes Redux state to Counter as props.
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

// Passes info to reducer behind the scenes.
const mapDispatchToProps = dispatch => {
    return {
        // adds to props.
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddFive: () => dispatch({type: 'ADD', value: 5}),
        onSubtractFive: () => dispatch({type: 'ADD', value: -5})
    };
};

// HOC function that returns a HOC function
export default connect(mapStateToProps, mapDispatchToProps)(Counter);