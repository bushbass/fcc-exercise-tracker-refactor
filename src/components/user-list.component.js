import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleUser from './single-user.component';

function UsersList() {
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    axios
      .delete('https://fcc-exercise-backend.onrender.com/users/' + id)
      .then((response) => {
        console.log(response.data);
      });
    setUsers(users.filter((user) => user._id !== id));
  };

  useEffect(() => {
    axios
      .get('https://fcc-exercise-backend.onrender.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>All Users</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            // <li key={user._id}>{user.username}</li>
            <SingleUser user={user} key={user._id} deleteUser={deleteUser}>
              test
            </SingleUser>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
