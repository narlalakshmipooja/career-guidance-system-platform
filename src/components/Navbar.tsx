import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Career Guidance</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/careers" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink to="/counselling" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Counselling
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

