import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };


    let persons = null;
    let btnClass = '';
    if (this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id} 
            > <Person click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}
             changed={(event) => this.nameChangedHandler(event, person.id)}
             /></ErrorBoundary> 
          })}
          
        </div> )
        btnClass = styles.Red;
    }
      const assigneDclasses = [];
      if (this.state.persons.length <= 2){
        assigneDclasses.push(styles.red);
      }

      if (this.state.persons.length <=1) {
        assigneDclasses.push(styles.bold);
      }
    return (
        <div className={styles.App}>
          <h1>Hi, I am a React App!! </h1>
          <p className={assigneDclasses.join(' ')}>This is really working !! </p>
          <button className={btnClass} onClick={this.togglePersonsHandler} > Toggle Persons </button>
            {persons}
        </div>
     // React.createElement('div', {className: "App"}, React.createElement('h1', null, "Does it work now?"), "Blah")

    );
  }
}

export default App;
