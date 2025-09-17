import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserLogin.css';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your actual login logic
    alert(`Username: ${username}, Password: ${password}`);
  };

  const goToRegister = () => {
    navigate('/user/register');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-primary">Login</button>
      </form>

      <div className="switch-auth">
        <p>
          Don't have an account?{' '}
          <button type="button" className="link-button" onClick={goToRegister}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
