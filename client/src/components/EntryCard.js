import React, { useState } from 'react'
import { Link } from 'react-router-dom';


// function EntryCard(props) {
//   return (
//     <li>
//       <h1>EntryCard</h1>
//     </li>
//   )
// }

// export default EntryCard
export default function EntryCard(props) {
  const [name, setName] = useState(props.entry.name)
  const [location, setLocation] = useState(props.entry.location)
  const [when, setWhen] = useState(props.entry.when)
  const [attended, setAttended] = useState(props.entry.attended)


  return (
    <div>
      <Link to={`/`}>
        <div>{ name }</div>
        <div>{ location }</div>
        <div>{ when }</div>
        <div>{ attended }</div>
      </Link>
    </div>
  )
}