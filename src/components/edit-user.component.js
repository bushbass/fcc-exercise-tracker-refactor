import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

function EditExercise(props) {
  const [username, setUsername] = useState('');

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    const user = {
      username: username
    };
    console.log(user);

    axios
      .post(
        'https://fcc-exercise-tracker-backend.herokuapp.com/users/update/' + props.match.params.id,
        user
      )
      .then(res => console.log(res.data));

    window.location = '/';
  };
  useEffect(props => {
    axios
      .get('https://fcc-exercise-tracker-backend.herokuapp.com/users' + props.match.params.id)
      .then(response => {
        console.log(response);
        setUsername(response.data.username);
      });
  }, []);

  return (
    <div>
      <h3>Edit User</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username: </label>
          <input
            type='text'
            required
            className='form-control'
            value={username}
            onChange={onChangeUsername}
          />
        </div>

        <div className='form-group'>
          <input type='submit' value='Edit User' className='btn btn-primary' />
        </div>
      </form>
    </div>
  );
}

export default EditExercise;
