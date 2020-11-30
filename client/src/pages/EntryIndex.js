import React, { useEffect, useState } from 'react';
import EntryModel from '../models/entry';

export default function EntryIndex() {
  const [entries, setEntries] = useState('')

  useEffect(() => {
    EntryModel.all().then((response) => {
      const {entries} = response.data
      console.log(entries);
      const divEntries = entries.map((entry, index) => {
        return <div key={index}>{entry.name}</div>
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