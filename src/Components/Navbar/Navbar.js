import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navigation() {
  return (
    <header>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
