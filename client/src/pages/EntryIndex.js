import React, { useEffect, useState } from 'react';
import EntryCard from '../components/EntryCard';
import EntryModel from '../models/entry';
import { Link } from 'react-router-dom';

export default function EntryIndex() {
  const [entries, setEntries] = useState('')

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

  return (
    <div>
      {entries}
      <Link to={'/entries/:entry/:entryid'}>
        <button className="btn btn-primary">Create New Party</button>
      </Link>
    </div>
  )
}