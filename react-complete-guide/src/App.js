import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
import Radium from 'radium';


class App extends Component {
  state = {
    persons: [
      {id: "ahc",name: "Max", age: 29},
      {id: "bab",name: "Manu", age: 2},
      {id: "nan",name: "blah", age: 3}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // NEVER DO thos  this.state.persons[0].name = "Maximilian";
  //   this.setState(
  //     {persons: [
  //       {name: newName, age: 29},
  //       {name: "Manu", age: 2},
  //       {name: "blah", age: 33}
  //   ]} )
  // }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
     
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})

  }

  deletePersonHandler = (personIndex) => {
  //  const persons = this.state.persons.slice();  //this is correct next syntax is es6 way to do the same thing
    const persons  = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }
    )

  }
  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)}
            name={person.name}
             age={person.age}
             key={person.id} 
             changed={(event) => this.nameChangedHandler(event, person.id)}
             /> 
          })}
          
        </div> 
        )
        style.backgroundColor = "red";
        style[':hover'] = {
          backgroundColor: "salmon",
          color: 'black'
        };
    }
      const classes = [];
      if (this.state.persons.length <= 2){
        classes.push('red');
      }

      if (this.state.persons.length <=1) {
        classes.push('bold');
      }
    return (
      <div className="App">
        <h1>Hi, I am a React App!! </h1>
        <p className={classes.join(' ')}>This is really working !! </p>
        <button style={style} onClick={this.togglePersonsHandler} > Toggle Persons </button>
         {persons}
        
        
      </div>
     // React.createElement('div', {className: "App"}, React.createElement('h1', null, "Does it work now?"), "Blah")

    );
  }
}

export default Radium(App);
