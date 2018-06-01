import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => (
  <header className="page-header">
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        <li><NavLink to="/not-found" exact>Not found</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;