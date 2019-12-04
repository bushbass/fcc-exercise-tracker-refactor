import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';


function EditExercise(props) {
  const [username, setUsername] = useState('');

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  
  const userID = useParams();
  
  const onSubmit = e => {
    e.preventDefault();
    const user = {
      username
    };
    console.log(user);

    axios
      .post(
        'https://fcc-exercise-tracker-backend.herokuapp.com/users/update/' + userID.id,
        user
      )
      .then(res => console.log(res.data))
      .then(() => window.location = '/users')
      

    
  };
  useEffect(props => {
    axios
      .get('https://fcc-exercise-tracker-backend.herokuapp.com/users/' + userID.id)
      .then(response => {
        console.log(response);
        setUsername(response.data.username);
      });
  }, [userID.id]);

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
