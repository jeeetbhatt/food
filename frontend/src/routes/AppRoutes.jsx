
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRegister from '../pages/UserRegister';
import UserLogin from '../pages/UserLogin';
import FoodPartnerRegister from '../pages/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/FoodPartnerLogin';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/user/register' element={<UserRegister />} />
            <Route path='/user/login' element={<UserLogin />} />
            <Route path='/food-partner/register' element={<FoodPartnerRegister />} />
            <Route path='/food-partner/login' element={<FoodPartnerLogin />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes