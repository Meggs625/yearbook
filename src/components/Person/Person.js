import React from 'react';
import './Person.css';

function Person(props) {
  console.log(props)

  return (
      <div className="person-card">
        <h1 className="person-name">{props.info.name}</h1>
        <img className="person-pic" src={props.info.photo} alt=''></img>
        <p className="person-quote"><i>"{props.info.quote}"</i></p>
      </div>
  )
}

export default Person;
