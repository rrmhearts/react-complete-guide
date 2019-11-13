import React, { useContext } from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';
import { AuthContext } from './context/auth-context';

const App = props => {
  /*
    useContext allows this component to use the state from another component
    instead of passing props. Provides access to isAuth.
  */
  const authContext = useContext(AuthContext);

  /*
    ^^ replaces <AuthContext.Consumer><Auth /></AuthContext.Consumer>
    (Redux replacement)
  */
  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />;
  }

  return content;
};

export default App;
