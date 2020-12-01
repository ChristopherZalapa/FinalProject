import React, { useEffect, useState } from 'react';
import EntryCard from '../components/EntryCard';
import EntryModel from '../models/entry';

export default function EntryIndex() {
  const [entries, setEntries] = useState('')

  useEffect(() => {
    EntryModel.all().then((response) => {
      const {entries} = response.data
      console.log(entries);
      const divEntries = entries.map((entry, index) => {
        return <EntryCard entry={entry} key={index} />
      })

      setEntries(divEntries)

    })
  }, [])

  return (
    <div>
      {entries}
      
    </div>
  )
}