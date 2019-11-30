import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://fcc-exercise-tracker-backend.herokuapp.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map(item => (
          <li key={item._id}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
