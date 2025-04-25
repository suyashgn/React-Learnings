import React, { useState } from 'react';

function UserForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log('Submitted value:', inputValue);
    setInputValue(''); // optional: clear input after submit
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label>
        Enter something:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type here"
          style={inputStyle}
        />
      </label>
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

const formStyle = { marginTop: '30px', textAlign: 'center' };
const inputStyle = { marginLeft: '10px', padding: '5px', fontSize: '15px' };
const buttonStyle = { marginLeft: '10px', padding: '8px 17px' };

export default UserForm;
