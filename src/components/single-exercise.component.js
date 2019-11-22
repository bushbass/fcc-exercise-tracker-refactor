import React from 'react';
import { Link } from 'react-router-dom';

const SingleExercise = ({ exercise, deleteExercise }) => (
  <tr>
    <td>{exercise.username}</td>
    <td>{exercise.description}</td>
    <td>{exercise.duration}</td>
    <td>{exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={'/exercises/edit/' + exercise._id}>
        <button>Edit</button>
      </Link>{' '}
      |{' '}
      <button
        onClick={() => {
          deleteExercise(exercise._id);
        }}
      >
        {' '}
        Delete
      </button>
    </td>
  </tr>
);

export default SingleExercise;
