import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username
    };
    axios
      .post('http://localhost:5000/users/add', user)
      .then(res => console.log('returned from axios -> ', res.data))
      .then(setUsername(''));
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='form-group'>
          <label>Username: </label>
          <input
            type='text'
            required
            className='form-control'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Create User'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
}

export default Test;
