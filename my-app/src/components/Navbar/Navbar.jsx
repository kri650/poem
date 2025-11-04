import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src="/food-preparer.png" alt="Restaurant Icon" className={styles.navIcon} />
          The Exquisite Eatery
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul className={`${styles.navbarNav} ${isOpen ? styles.open : ''}`}>
        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/reservations" onClick={() => setIsOpen(false)}>Reservations</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;