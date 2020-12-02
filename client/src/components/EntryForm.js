import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import EntryModel from '../models/entry';

const EntryForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [when, setWhen] = useState('');
  const [attended, setAttended] = useState('');

  let history = useHistory();

  const handelSubmit = (event) => {
    event.preventDefault();
    const temp = {
      name: name,
      location: location,
      when: when,
    }

    
    EntryModel.addEntry(temp).then((response) => {
      console.log(response);
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
    const buttonChange = (event) => {
      setAttended(event.target.value);
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
        <button type="submit" onChange = {buttonChange} className="btn btn-primary entryBtn">Submit</button>
      </form>
    )

}

export default EntryForm;