import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [username, setUsername] = useState('');

  const onChangeUsername = (event) => setUsername(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    const user = { username };
    console.log(user);
    axios
      .post('https://fcc-exercise-backend.onrender.com/users/add', user)
      .then((res) => console.log(res));
    alert(
      `User ${username} created.  Create another user or go add an exercise!`
    );
    setUsername('');
  };
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
