import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import EntryCard from '../components/EntryCard';
import EntryModel from '../models/entry';



export default function EntryIndex() {
  const [entries, setEntries] = useState([])
  let history = useHistory();
    // StackOverflow https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript

  function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }

  useEffect(() => {
    EntryModel.all(getCookieValue("userId")).then((data) => {
      // entries = data
      
      console.log(data);
      
      setEntries(data.data.entries)
      
      console.log(data.entries);
    })
  }, [])

  const buttonHandler = () => {
    history.push('/entriesForm')
  }

  // const divEntries = entries.map((entry, index) => {
  //   return <EntryCard entry={entry} key={index} />
  // })

  const deleteParty = (remove) => {
    console.log(remove);
    EntryModel.deleteParty(remove)
    EntryModel.all(getCookieValue("userId")).then((data) => {
      // entries = data
      
      console.log(data);
      
      setEntries(data.data.entries)
      
      console.log(data.entries);
    })
  }

  return (
    
    <div>
      <h1>Show User Parties</h1>
      {entries.map((entry) => {
        return (
          <div>
            <Link to={'/entryshowpage/'+entry._id}>{entry.name}</Link>
            <button onClick={() => deleteParty(entry._id)}>Delete</button>
          </div>
        )
      })}
      <button onClick={ buttonHandler } className="btn btn-dark newUserBtn">Create New Party</button>
    </div>
  )
}