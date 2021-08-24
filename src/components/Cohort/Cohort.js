import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort(props) {
  let title = 'Staff'
  const peopleComponents = props.data.map(individual => {
    return (
      <Person key={individual.id} info={individual}/>
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
