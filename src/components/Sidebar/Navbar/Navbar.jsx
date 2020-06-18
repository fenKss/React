import React     from 'react';
import {NavLink} from 'react-router-dom';
import s         from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={s.nav}>
        <ul>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/title">Title</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/dialogs">Dialogs</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>
      </nav>
  );
};

export default Navbar;