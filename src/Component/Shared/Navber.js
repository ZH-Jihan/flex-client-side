import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/logo_new.png';

const Navber = () => {
    const menuitem = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <form className="lg:flex sm:gap-y-4 gap-x-4 lg:pl-8 pr-8" role="search">
        <div className='form-control'>
          <input type="text" placeholder="Search" className="input" />
          </div>
        <button className="btn " type="submit">Search</button>
      </form>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar bg-error text-white justify-start md:justify-center">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="bg-error menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-xl">
        {menuitem}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal   text-xl pr-20">
        {menuitem}
    </ul>
  </div>
</div>
    );
};

export default Navber;