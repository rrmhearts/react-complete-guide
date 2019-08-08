import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {

  state = {
    value: "",
    length: 0
  };

  changeListener = (event) => {
    this.setState({
      value: event.target.value,
      length: event.target.value.length
    });
  }

  removeLetter = (index) => {
    const arrWord = this.state.value.split('');
    arrWord.splice(index, 1);
    const newWord = arrWord.join('');

    this.setState({
      value: newWord,
      length: newWord.length
    });
  }

  render() {

    let chars = (
      <div>
        {
          this.state.value.split('').map((val, ind) => {
            return <CharComponent key={ind} letter={val} click={this.removeLetter.bind(this, ind)}/>
          })
        }
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={this.changeListener} value={this.state.value}></input>
        <p>{this.state.length}</p>

        <ValidationComponent length={this.state.length} />
        {chars}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}
/*
You can split a string into an array of its characters with the split('')  method. By passing just an empty string, it's split after every character.

You may then re-create a string from that array by using join('')  - again, joining with an empty string as a separator.
*/
export default App;
