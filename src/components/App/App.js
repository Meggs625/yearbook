import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import Form from './Form';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addStudent = (studentInfo) => {
    this.setState({students: [studentInfo, ...people.students]})
  }

  deleteStudent = (id) => {
    const stillStudents = this.state.students.filter(student => student.id !== id);
    this.setState({ students: stillStudents})
  }

  // updateInfo = (id, type, update) => {
  //   const neededStudent = this.state.students.find(student => student.id === id);
  //   const otherStudents = this.state.students.filter(student => student.id !== id);    
  //   neededStudent[type] = update;
  //   this.setState({ students: [...otherStudents, neededStudent]})
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
       </header>
        <Form addStudent={this.addStudent}/>
       <Cohort data={this.state.staff} type="staff"/>
       <Cohort 
       data={this.state.students} 
       type="students" 
       delete={this.deleteStudent}
       />
      </div>
    );
  }
}


export default App;
