import React from 'react';
import styles from './cockpit.css';

const cockpit = (props) => {
   const assigneDclasses = [];
   let btnClass = ''
   if (props.showPersons) {
       btnClass = styles.Red;
   }
    if (props.persons.length <= 2){
      assigneDclasses.push(styles.red);
    }

    if (props.persons.length <=1) {
      assigneDclasses.push(styles.bold);
    }
    return (
        <div className={styles.cockpit}>
            <h1>Hi, I am a React App!! </h1>
                <p className={assigneDclasses.join(' ')}>This is really working !! </p>
                 <button className={btnClass} onClick={props.clicked} > Toggle Persons </button>
        </div>

    );
}

export default cockpit;