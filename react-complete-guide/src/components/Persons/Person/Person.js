import React, { Component } from 'react';
import classes from  './person.css';
import WithClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
      }
    
      componentWillMount(){
        console.log('[Person.js] inside component will mount');
      }
    
      componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
      }
    
    render(){
        console.log('[Person.js inside render' );
        return (
            <WithClass classes={classes.Person}>    
                <p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old!! </p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass> )
    }

} 


export default Person;


