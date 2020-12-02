import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import EntryForm from '../components/EntryForm'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Party Bucket List</h1>
        <Link to="/users">Create User</Link>
        <EntryForm />
      </div>
    )
  }
}

export default HomePage;