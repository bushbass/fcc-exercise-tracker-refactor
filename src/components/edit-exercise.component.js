import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';

function EditExercise(props) {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState(['Bob']);

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  const onChangeDescription = e => {
    setDescription(e.target.value);
  };
  const onChangeDuration = e => {
    setDuration(e.target.value);
  };
  const onChangeDate = date => {
    setDate(new Date(date));

    console.log(date);
  };
  const userID = useParams();
  const onSubmit = e => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date
    };

    axios
      .post('https://fcc-exercise-tracker-backend.herokuapp.com/exercises/update/' + userID.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/exercises';
  };
  useEffect(() => {
    axios.get('https://fcc-exercise-tracker-backend.herokuapp.com/users').then(response => {
      if (response.data.length > 0) {
        setUsers(response.data.map(user => user.username));
      }
    });
    axios.get('https://fcc-exercise-tracker-backend.herokuapp.com/exercises/' + userID.id).then(response => {
      setUsername(response.data.username);
      setDescription(response.data.description);
      setDuration(response.data.duration);
      setDate(new Date(response.data.date));
    });
  }, [userID.id]);
  
  
  
  

  return (
    <div>
      <h3>Edit Exercise</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username: </label>
          <select
            required
            className='form-control'
            value={username}
            onChange={onChangeUsername}
          >
            {users.map(function(user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>

        <div className='form-group'>
          <label>Description: </label>
          <input
            type='text'
            required
            className='form-control'
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className='form-group'>
          <label>Duration (in minutes): </label>
          <input
            type='text'
            className='form-control'
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className='form-group'>
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className='form-group'>
          <input
            type='submit'
            value='Edit Exercise'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
}

export default EditExercise;
