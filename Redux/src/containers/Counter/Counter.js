import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, add, subtract, storeResult, deleteResult } from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            // State and dispatch functions are passed in through props.
            // Thanks to mapStateToProps and mapDispatchToProps
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={/*Pass counter because don't have access to global state in reducer.*/
                                   () => this.props.onStoreResult(this.props.ctr)
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
        ctr: state.ctr.counter, // state is nested by reducer keys
        // Object "results" with id and value
        storedResults: state.res.results // state is nested by reducer keys
    }
};

// Passes info to reducer behind the scenes.
const mapDispatchToProps = dispatch => {
    return {
        // Constants prevent typing errors in strings. Autocompletes...
        onIncrementCounter: () =>  dispatch( increment() /* return type object*/),
        onDecrementCounter: () =>  dispatch( decrement() ),
        onAddCounter: () =>        dispatch( add(10) ),
        onSubtractCounter: () =>   dispatch( subtract(15) ),
        onStoreResult: (result) => dispatch( storeResult(result) ),
        onDeleteResult: (id) =>    dispatch( deleteResult(id) )
    }
};

// HOC function that returns a HOC function
export default connect(mapStateToProps, mapDispatchToProps)(Counter);