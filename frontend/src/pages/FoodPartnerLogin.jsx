import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FoodPartnerLogin.css';


const FoodPartnerLogin = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/food-partner/register');
  };

  return (
    <div className="foodpartner-login-container">
      <form className="foodpartner-login-form">
        <h2>Food Partner Login</h2>
        <div className="foodpartner-input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email" />
        </div>
        <div className="foodpartner-input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn-primary">Login AC</button>
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

export default FoodPartnerLogin;
