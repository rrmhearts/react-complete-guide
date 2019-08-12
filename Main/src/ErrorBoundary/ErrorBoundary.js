import React, {Component} from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) { 
            // Will see this in production! Permits "graceful" fail
            // For "might" fail and cannot control.
            return <h1> Something went wrong <br/> {this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;