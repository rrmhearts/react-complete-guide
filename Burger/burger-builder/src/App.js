import React, { Component } from 'react';

import Layout from './components/HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    show: true
  };

  // TEST WillUnmount for Burger Builder
  componentDidMount() {
    setTimeout(() => {
      this.setState({show: false});
    }, 5000);
  }

  render () {
    return (
      <div>
        <Layout>
          {this.state.show ? <BurgerBuilder /> : null }
        </Layout>
      </div>
    );
  }
}

export default App;
