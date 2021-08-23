import React from 'react';
import './Person.css';

function Person(props) {
  console.log(props)

  return (
    <div>
      <hi>{props.info.name}</hi>
      <img src={props.info.photo} alt=''></img>
      <p>{props.info.quote}</p>
    </div>
  )
}

export default Person;
