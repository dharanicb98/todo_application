import React, { useState } from "react";
// import { jwtDecode } from "jwt-decode";
import {useNavigate} from 'react-router-dom';


const Header = () => {
  const token = localStorage.getItem("token");
  //const userDetails = jwtDecode(token);
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate('/signin')
  };

  return (
    <header className="bg-white shadow-md h-[70px] w-[100%] z-[10] flex justify-between items-center px-[20px] fixed top-0 left-0 right-0 shadow-sm">
      <h1 className="font-medium text-xl italic">Claw Enterprises</h1>
      <span onClick={handleLogOut} className="cursor-pointer">Logout</span>
    </header>
  );
};

export default Header;
