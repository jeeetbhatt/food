import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FoodPartnerRegister.css';

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/food-partner/login');
  };

  return (
    <div className="foodpartner-register-container">
      <form className="foodpartner-register-form">
        <h2>Food Partner Registration</h2>
        <div className="foodpartner-register-input-group">
          <label htmlFor="restaurantName">Restaurant Name</label>
          <input type="text" id="restaurantName" name="restaurantName" placeholder="Enter restaurant name" />
        </div>
        <div className="foodpartner-register-input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email" />
        </div>
        <div className="foodpartner-register-input-group">
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

export default FoodPartnerRegister;
