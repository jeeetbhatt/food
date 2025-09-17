import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserRegister.css';

const UserRegister = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/user/login');
  };

  return (
    <div className="userregister-container">
      <form className="userregister-form">
        <h2>User Registration</h2>
        <div className="userregister-input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter username" />
        </div>
        <div className="userregister-input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email" />
        </div>
        <div className="userregister-input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn-primary">Register</button>
      </form>

      <div className="switch-auth">
        <p>
          Already have an account?{' '}
          <button type="button" className="link-button" onClick={goToLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
