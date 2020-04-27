import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersRequest, createUserRequest, deleteUserRequest } from '../actions/users'
import UserList from './UserList'
import NewUserForm from './NewUserFrom'

class App extends Component {
  constructor(props) {
    super(props)

    this.props.getUsersRequest()
  }

  handleSubmit= ({ firstName, lastName }) => {
    this.props.createUserRequest({ firstName, lastName })
  }

  handleDeleteUserClcik = userId => {
    this.props.deleteUserRequest(userId)
  }

  render() {
    const { users } = this.props

    return (
      <div style={ { margin: '0 auto', padding: '20px', maxWidth: '600px' } }>
        <NewUserForm onSubmit={ this.handleSubmit }/>
        <UserList users={ users.items } onDeleteUser={ this.handleDeleteUserClcik }/>
      </div>
    )
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest
})(App)
