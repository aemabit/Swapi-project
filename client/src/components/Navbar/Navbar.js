import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => (
  <nav className={styles.navBar}>
    <div className={styles.LogoNav}>
      <NavLink exact to="/">
        <span>STAR</span>
        <span>WARS</span>
      </NavLink></div>
    <ul className={styles.mainList}>
      <li className={styles.listNav}><NavLink className={styles.theLink} exact to="/characters">CHARACTERS</NavLink></li>
    </ul>
  </nav>
)

export default Navbar
