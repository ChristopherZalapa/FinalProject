import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EntryModel from '../models/entry';

const EntryForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [when, setWhen] = useState('');


  let history = useHistory();

  const handelSubmit = (event) => {
    console.log('This is working');
    
    event.preventDefault();
    // StackOverflow https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript

    function getCookieValue(a) {
      var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
      return b ? b.pop() : '';
    }
    const temp = {
      name: name,
      location: location,
      when: when,
      user: getCookieValue('userId') 
    }

    
    
    EntryModel.addEntry(temp).then((response) => {
      console.log("called addEntry");
      history.push('/entries');
    })
  }

    const nameChange = (event) => {
    setName(event.target.value);
    }
    const locationChange = (event) => {
      setLocation(event.target.value);
    }
    const whenChange = (event) => {
      setWhen(event.target.value);
    }


    return (
      <form onSubmit={handelSubmit}>
        <input
          onChange = {nameChange}
          className="entryForm"
          type="text"
          placeholder="Name:"
        />
        <input
          onChange = {locationChange}
          className="entryForm"
          type="text"
          placeholder="Location:"
        />
        <input
          onChange = {whenChange}
          className="entryForm"
          type="text"
          placeholder="When:"
        />
        <button type="submit" className="btn btn-primary entryForm">Submit</button>
      </form>
    )

}

export default EntryForm;