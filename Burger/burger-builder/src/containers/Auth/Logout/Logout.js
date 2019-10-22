import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout(); // forward this.props.history to redirect...
        // or use Redirect
    }

    render() {
        return <Redirect to="/"/>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(Logout);