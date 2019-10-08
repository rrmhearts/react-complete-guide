import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            // State and dispatch functions are passed in through props.
            // Thanks to mapStateToProps and mapDispatchToProps
            <div>
                <CounterOutput value={this.props.localCounter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={/*Pass counter because don't have access to global state in reducer.*/
                                   () => this.props.onStoreResult(this.props.localCounter)
                                }>Store Result</button>
                <ul>
                    {/*storedResults is from Redux state.*/
                    this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Passes Redux state to Counter as props.
const mapStateToProps = state => {
    return {
        // map "ctr" reducer's counter to ctr prop.
        localCounter: state.ctr.counter, // state is nested by reducer keys
        // Object "results" with id and value
        storedResults: state.res.results // state is nested by reducer keys
    }
};

// Passes info to reducer behind the scenes.
const mapDispatchToProps = dispatch => {
    return {
        // Constants prevent typing errors in strings. Autocompletes...
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
};

// HOC function that returns a HOC function
export default connect(mapStateToProps, mapDispatchToProps)(Counter);