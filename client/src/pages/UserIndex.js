import React, {  useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import UserModel from '../models/user';

export default function UserIndex() {
  const [users, setUsers] = useState('')

  useEffect(() => {
    UserModel.all().then((response) => {
      const { users } = response.data
      console.log(users);
      const divUsers = users.map((user, index) => {
        return <UserCard user={ user } key={ index } />
      })
      
      setUsers(divUsers)

    })

  }, [])

  return (
    <div>
      { users }
    </div>
  )
}
