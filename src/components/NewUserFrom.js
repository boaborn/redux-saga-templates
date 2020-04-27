import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class NewUserForm extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    <Form onSubmit={ this.handleSubmit }>
      <FormGroup>
        <Label>First name</Label>
        <Input placeholder="First name" onChange={ this.handleFirstNameChange } value={ this.state.firstName }/>
      </FormGroup>

      <FormGroup>
        <Label>Last name</Label>
        <Input placeholder="Last name" onChange={ this.handleLastNameChange } value={ this.state.lastName }/>
      </FormGroup>

    </Form>
  }
}
