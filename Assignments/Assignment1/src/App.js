import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {username: "zoe"},
      {username: "wendy"},
      {username: "bella"}
    ],
    currentUser: 0
  };

  switchUserHandler = (event) => {
    let newUsernames = [...this.state.usernames];
    newUsernames[this.state.currentUser].username = event.target.value;
    this.setState({
      usernames: [
        ...newUsernames
      ]
    
    });
  }

  selectUser = (user) => {
    this.setState( {
      currentUser: user
    });
  }

  render() {
    return (
      <div className="App">
        <div id="input">
          <p>Current: {this.state.currentUser}</p>
          <UserInput changed={this.switchUserHandler} username={this.state.usernames[this.state.currentUser].username}/>
        </div>
        <UserOutput username={this.state.usernames[0].username} selectUser={this.selectUser.bind(this, 0)}/>
        <UserOutput username={this.state.usernames[1].username} selectUser={this.selectUser.bind(this, 1)}/>
        <UserOutput username={this.state.usernames[2].username} selectUser={this.selectUser.bind(this, 2)}/>
      </div>
    );
  }
}

export default App;
