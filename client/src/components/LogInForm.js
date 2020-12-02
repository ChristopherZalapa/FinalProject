import React, { useState, useEffect } from 'react'

const LogInForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const nameChange = (event) => {
    setName(event.target.value);
  }
  const emailChange = (event) => {
    setEmail(event.target.value);
  }

  useEffect(() => {

  }, []);

  return (
    <div className="loginForm">
      <form>
        <input 
          onChange = { nameChange }
          placeholder = "Enter Name"
          type = "text"
          value = { name }
        />
        <input 
          onChange = { emailChange }
          placeholder = "Enter Email"
          type = "text"
          value = { email }
        />
      </form>
    </div>
  )
}

export default LogInForm;