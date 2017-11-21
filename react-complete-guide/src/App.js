import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 29},
      {name: "Manu", age: 2},
      {name: "blah", age: 3}
    ]
  }

  switchNameHandler = (newName) => {
    // NEVER DO thos  this.state.persons[0].name = "Maximilian";
    this.setState(
      {persons: [
        {name: newName, age: 29},
        {name: "Manu", age: 2},
        {name: "blah", age: 33}
    ]} )
  }


  nameChangedHandler = (event) => {
    this.setState(
      {persons: [
        {name: "Max", age: 29},
        {name: event.target.value , age: 2},
        {name: "blah", age: 33}
      ]
    }
    )

  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am a React App!! </h1>
        <p> This is really working !! </p>
        <button style={style} onClick={() => this.switchNameHandler("Maximillian!!!")} > Switch name </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!!!")}
          changed={this.nameChangedHandler} >  My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
     // React.createElement('div', {className: "App"}, React.createElement('h1', null, "Does it work now?"), "Blah")

    );
  }
}

export default App;
