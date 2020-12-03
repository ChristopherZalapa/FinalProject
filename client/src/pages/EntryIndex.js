import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EntryCard from '../components/EntryCard';
import EntryModel from '../models/entry';


export default function EntryIndex() {
  const [entries, setEntries] = useState('')
  let history = useHistory();
    // StackOverflow https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript

  function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }

  useEffect(() => {
    EntryModel.all(getCookieValue("userId")).then((response) => {
      const {entries} = response.data
      console.log(entries);
      const divEntries = entries.map((entry, index) => {
        return <EntryCard entry={entry} key={index} />
      })

      setEntries(divEntries)

    })
  }, [])

  const buttonHandler = () => {
    history.push('/entriesForm')
  }

  return (
    
    <div>
      <h1>Show User Parties</h1>
      {entries}
      <button onClick={ buttonHandler } className="btn btn-dark">Create New Party</button>
      
    </div>
  )
}