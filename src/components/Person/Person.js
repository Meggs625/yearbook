import React from 'react';
import './Person.css';

function Person(props) {
  const quote = props.info.quote ? props.info.quote : 'Life is like a box of chocolates';
  return (
      <div className="person-card">
        <h1 className="person-name" >{props.info.name}</h1>
        <img className="person-pic" src={props.info.photo} alt='' ></img>
        <div>        
          <p className="person-quote" ><i>"{quote}"</i></p>
          <p>{props.info.superlative}</p>
        </div>
        {props.type === 'students' && <button onClick={() => props.delete(props.info.id)}>Delete</button>}
      </div>
  )
}

export default Person;
