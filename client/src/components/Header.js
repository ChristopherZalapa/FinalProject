import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand logo" href="/">Party Bucket List</a>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to='/' className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/entries' className="nav-link">Entries</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;