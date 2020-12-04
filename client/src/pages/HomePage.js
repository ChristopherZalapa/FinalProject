import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 



class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Party Bucket List</h1>
        <div>
          <img className="djBooth" src="https://whathappens.be/wp-content/uploads/2018/01/6a332b879b76a521e72b5678a2db05b1.jpg" alt="Dj Booth"/>
        </div>
        <Link to='/users/:user/:userId'>
          <button className="btn btn-dark home">Create New User</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;