import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      quote: ''
    }
  }

  submitStudent = (event) => {
    event.preventDefault();
    const newStudent = {
      id: Date.now(),
      type: 'student',
      photo: 'https://i.pinimg.com/474x/98/cf/83/98cf831de6b5cd6be0f1660299af0ea6.jpg',
      ...this.state
    }
    this.clearInputs();
    this.props.addStudent(newStudent)
  }

  clearInputs = () => {
    this.setState({name: '', quote: ''})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return(
      <form>
      <h1>Add Your New Student Here</h1>
      <input 
        type='text'
        placeholder='name'
        name='name'
        value={this.state.name}
        onChange={event => this.handleChange(event)}
        />

      <input
        type='text'
        placeholder='quote'
        name='quote'
        value={this.state.quote}
        onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitStudent(event)}>Submit</button>
      </form>
    )
  }
}
export default Form