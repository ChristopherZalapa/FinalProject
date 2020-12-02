import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserModel from '../models/user';

const UserForm = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  

  let history = useHistory();

  const handelSubmit = (event) => {
    event.preventDefault();
    const temp = {
      name: name,
      bio: bio,
      email: email,
      
    }
    UserModel.addUser(temp).then((response) => {
      console.log(response);
      history.push('/users');
    })
  }

  const nameChange = (event) => {
    setName(event.target.value);
  }
  const bioChange = (event) => {
    setBio(event.target.value);
  }
  const emailChange = (event) => {
    setEmail(event.target.value);
  }


return (
  <form onSubmit={handelSubmit}>
    <input 
      onChange = {nameChange}
      className = "userForm"
      type = 'text'
      placeholder = 'Enter Name'
    />
    <input 
      onChange = { bioChange }
      className = "userForm"
      type = "text"
      placeholder = "Enter Bio"
    />
    <input 
      onChange = { emailChange }
      className = "userForm"
      type = "text"
      placeholder = "Enter Email"
    />
    <button type = "submit" className="btn btn-primary userForm">Submit</button>
  </form>
)

}

export default UserForm;