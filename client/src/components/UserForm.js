import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserModel from '../models/user';

const UserForm = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [parties, setParties] = useState('');

  let history = useHistory();

  const handelSubmit = (event) => {
    event.preventDefault();
    
  }


}