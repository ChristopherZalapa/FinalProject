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
      <form onSubmit={handelSubmit} className="entryForm">
        <input
          onChange = {nameChange}
          className="entryName"
          type="text"
          placeholder="Name:"
        />
        <input
          onChange = {locationChange}
          className="entryLocation"
          type="text"
          placeholder="Location:"
        />
        <input
          onChange = {whenChange}
          className="entryWhen"
          type="text"
          placeholder="When:"
        />
        <button type="submit" onChange = {buttonChange} className="btn btn-primary entryBtn">Submit</button>
      </form>
    )

}

export default EntryForm;






// import React, { useEffect, useState } from 'react'

// const EntryForm = () => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [when, setWhen] = useState('');
//   const [attended, setAttended] = useState('');

//   const nameChange = (event) => {
//     setName(event.target.value);
//   }
//   const locationChange = (event) => {
//     setLocation(event.target.value);
//   }
//   const whenChange = (event) => {
//     setWhen(event.target.value);
//   }
//   const buttonChange = (event) => {
//     setAttended(event.target.value);
//   }

// useEffect(() => {

// }, []);

  
//     return (
//       <form className="entryForm">
//         <input
//           onChange = {nameChange}
//           className="entryName"
//           type="text"
//           placeholder="Name:"
//         />
//         <input
//           onChange = {locationChange}
//           className="entryLocation"
//           type="text"
//           placeholder="Location:"
//         />
//         <input
//           onChange = {whenChange}
//           className="entryWhen"
//           type="text"
//           placeholder="When:"
//         />
//         <button type="submit" onChange = {buttonChange} className="btn btn-primary entryBtn">Submit</button>
//       </form>
//     )

// }

// export default EntryForm;