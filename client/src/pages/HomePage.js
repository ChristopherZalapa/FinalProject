import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 


class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Party Bucket List</h1>
        <Link to="/users/:user/:userid">
          <button className="btn btn-primary">Create User</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;