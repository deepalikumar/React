import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons: [
        {id: "ahc",name: "Max", age: 29},
        {id: "bab",name: "Manu", age: 2},
        {id: "nan",name: "blah", age: 3}
      ],
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] inside component will mount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }
    
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Update app.js inside shouldcomponetUpdate', nextProps, nextState); 
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('update app.ks inside componentWillUpdate()',nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('Update app.js inside componentDidUpdate()');
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
    console.log('[App.js] inside render');


    let persons = null;
    
    if (this.state.showPersons ) {
      persons =   
          <Persons 
             persons={this.state.persons }
             clicked={this.deletePersonHandler}
             changed={this.nameChangedHandler} />         
    }
       return (
        <Aux>
          <button onClick={() =>{this.setState({showPersons: true})}}> Show Persons  </button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          />
        {persons}
        </Aux>
     // React.createElement('div', {className: "App"}, React.createElement('h1', null, "Does it work now?"), "Blah")

    );
  }
}

export default withClass(App, styles.App);
