import React from 'react';
import './Person.css';

function Person(props) {
  return (
      <div className="person-card">
        <h1 className="person-name">{props.info.name}</h1>
        <img className="person-pic" src={props.info.photo} alt=''></img>
        <div>        
          <p className="person-quote"><i>"{props.info.quote}"</i></p>
          <p>{props.info.superlative}</p>
        </div>
      </div>
  )
}

export default Person;
