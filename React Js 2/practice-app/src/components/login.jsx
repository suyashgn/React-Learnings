import React, { useState } from 'react';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>
        {isLoggedIn ? '👋 Welcome back, User!' : '🔐 Please log in to continue'}
      </h2>

      {isLoggedIn ? (
        <button onClick={handleLogout} style={buttonStyle}>
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default LoginControl;
