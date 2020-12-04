import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 



class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Party Bucket List</h1>
        <div>
          <img src="" alt=""/>
        </div>
        <Link to='/users/:user/:userId'>
          <button className="btn btn-dark">Create New User</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;