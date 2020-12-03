import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserCard(props) {
  const [name, setName] = useState(props.user.name)
  const [bio, setBio] = useState(props.user.bio)
  const [parties, setParties] = useState(props.user.parties)

  const handelClick = (event) => {
    event.preventDefault();

    

  }

  return (
    <div>
      <Link onClick={ handelClick } >
      <div>{ name }</div>
      <div>{ bio }</div>
      <div>{ parties }</div>
      </Link>
    </div>
  )
}
