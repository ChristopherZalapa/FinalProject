import React, { Component } from 'react'

class EntryForm extends Component {
  render() {
    return (
      <form className="entryForm">
        <input
          className="entryName"
          type="text"
          placeholder="Name:"
        />
        <input
          className="entryLocation"
          type="text"
          placeholder="Location:"
        />
        <input 
          className="entryWhen"
          type="text"
          placeholder="When:"
        />
        
        <button type="submit" class="btn btn-primary entryBtn">Submit</button>

          {/* <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button> */}
      </form>
    )
  }
}


export default EntryForm;