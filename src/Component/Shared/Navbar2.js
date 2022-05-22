import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo/logo_new.png';

const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-error text-white">
  <div className="container-fluid">
    <img src={logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item fw-bold fs-3 px-3">
                <NavLink className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  } aria-current="page" to="/home"
                >
                  Home
                </NavLink>
          </li>
        <li className="nav-item fw-bold fs-3 px-3">
                <NavLink className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  } aria-current="page" to="/blog"
                >
                  Blog
                </NavLink>
          </li>
        <li className="nav-item fw-bold fs-3 px-3">
                <NavLink className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  } aria-current="page" to="/about"
                >
                  About
                </NavLink>
          </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn " type="submit">Search</button>
      </form>
      <div className="nav-item fw-bold fs-3 px-5">
                <NavLink className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  } aria-current="page" to="/login"
                >
                  Login
                </NavLink>
          </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar2;