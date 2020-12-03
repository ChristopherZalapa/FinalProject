import React, { useState, useEffect } from 'react'
import EntryModel from '../models/entry';
import EntryForm from '../components/EntryForm';

const EntryShowPage = (props) => {

  return (
    <div>
      <h1>Party Show Page</h1>
      {/* {props.entry.name} */}
      <button className="btn btn-dark">Update</button>
      <button className="btn btn-dark">Delete</button>
    </div>
  )
}

export default EntryShowPage;