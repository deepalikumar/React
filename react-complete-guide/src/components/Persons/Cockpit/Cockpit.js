import React from 'react';
import styles from './cockpit.css';
import Aux from '../../../hoc/Aux';

const cockpit = (props) => {
   const assigneDclasses = [];
   let btnClass = styles.button;
   if (props.showPersons) {
       btnClass = [styles.button ,styles.Red ].join(' ');
   }
    if (props.persons.length <= 2){
      assigneDclasses.push(styles.red);
    }

    if (props.persons.length <=1) {
      assigneDclasses.push(styles.bold);
    }
    return (   
        <Aux>
             <h1>{props.appTitle} </h1>
             <p className={assigneDclasses.join(' ')}>This is really working !! </p>
             <button className={btnClass} onClick={props.clicked} > Toggle Persons </button>
        </Aux>
    );
}

export default cockpit;