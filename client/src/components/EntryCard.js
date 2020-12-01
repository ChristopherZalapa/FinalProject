import React, { useState } from 'react'

export default function EntryCard(props) {
  const [name, setName] = useState(props.entry.name)
  const [location, setLocation] = useState(props.entry.location)
  const [when, setWhen] = useState(props.entry.when)
  const [attended, setAttended] = useState(props.entry.attended)


  return (
    <div>
      <div>{ name }</div>
      <div>{ location }</div>
      <div>{ when }</div>
      <div>{ attended }</div>
    </div>
  )
}
