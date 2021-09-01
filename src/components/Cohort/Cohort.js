import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort(props) {
  let title = 'Staff'
  const peopleComponents = props.data.map(individual => {
    return (
      <Person 
      key={individual.id} 
      id={individual.id}
      info={individual} 
      type={props.type}
      delete={props.delete}
      update={props.update}/>
      
    )
  })

  if (props.type === 'students') {
    title = 'Students';
  } 

  return (
    <div>
      <h1>{title}</h1>
      <section className="people-grid">
        {peopleComponents}
      </section>
   </div>
  )
}

export default Cohort;
