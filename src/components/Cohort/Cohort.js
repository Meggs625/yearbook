import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort(props) {
  const peopleComponents = props.data.map(individual => {
    return (
      <Person key={individual.id} info={individual}/>
    )
  })
  return (
    <div>
      <h1>Hi!</h1>
      <section>
        {peopleComponents}
      </section>
   </div>
  )
}

export default Cohort;
