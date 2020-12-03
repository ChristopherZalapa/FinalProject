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
        <div>
        <UserCard user={ user } key={ index } />
        <button onClick={ () => handleClickLogin(user) }>Log In</button>
        </div>
      ) 
    })
    
  }

  return (
    <div>
      {users.length !==0 && renderUserCards()}
      <Link to={'/users/:user/:userid'} >
        <button className="btn btn-primary">Create New User</button>
      </Link>
    </div>
  )
}
