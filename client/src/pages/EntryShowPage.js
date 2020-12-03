import React, { useState, useEffect } from 'react'
import EntryCard from '../components/EntryCard'
import EntryModel from '../models/entry';

const EntryShowPage = (props) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [when, setWhen] = useState('');

  useEffect(() => {
    EntryModel.byId().then((response) => {
      const { name } = response.data
      console.log(name);
      const showName = name.map((entry, index) => {
        return <EntryCard entry = { entry } key = { index } />
      })

      setName(showName)

    })
    
    return(
      <div>
        <div>{ name }</div>
      </div>
    )

  })

}

export default EntryShowPage;