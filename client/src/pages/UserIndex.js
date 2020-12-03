import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../components/UserCard';
import UserModel from '../models/user';

export default function UserIndex() {
  const [users, setUsers] = useState('')


  useEffect(() => {
    UserModel.all().then((response) => {
      setUsers(response.data.users)
      console.log(response.data.users);
      
    })

  },[setUsers])

  const handleClickLogin = (user) => {
    document.cookie = `userId=${user._id}`
    console.log(user._id);
    
  }

  const renderUserCards = () => {
    return users.map((user, index) => {
      return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
          <div className="card">
              <UserCard user={ user } key={ index } />
              <button className="btn btn-dark" onClick={ () => handleClickLogin(user) }>Log In</button>
            </div>  
          </div>
        </div>
      ) 
    })
    
  }

  return (
    <div>
    <h1>Show All Users</h1>
      {users.length !==0 && renderUserCards()}
      <Link to={'/users/:user/:userid'} >
        <button className="btn btn-primary newUserBtn">Create New User</button>
      </Link>
    </div>
  )
}
