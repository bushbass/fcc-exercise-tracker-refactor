import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({ user, deleteUser }) => (
  <tr>
    <td>{user.username}</td>
    <td>
      <Link to={'/users/edit/' + user._id}>
        <button>Edit</button>
      </Link>{' '}
      |{' '}
      <button
        onClick={() => {
          deleteUser(user._id);
        }}
      >
        {' '}
        Delete
      </button>
    </td>
  </tr>
);

export default SingleUser;
