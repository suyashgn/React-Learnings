import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Suyash' },
    { id: 2, name: 'Parth' },
    { id: 3, name: 'Saurabh' }
  ]);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User ${users.length + 1}`
    };
    setUsers([...users, newUser]);
  };

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} style={listItemStyle}>
            {user.name}
            <button onClick={() => removeUser(user.id)} style={buttonStyle}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addUser} style={addButtonStyle}>Add User</button>
    </div>
  );
}

const containerStyle = { textAlign: 'center', marginTop: '30px' };
const listItemStyle = { margin: '10px 0', fontSize: '18px' };
const buttonStyle = { marginLeft: '10px', padding: '5px 10px' };
const addButtonStyle = { marginTop: '20px', padding: '8px 20px' };

export default UserList;
