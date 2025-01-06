import React, { useState } from "react";
import styles from '../css/LayoutStyles/Navbar.module.css';
import { NavLink } from "react-router-dom";
import { CgMenuOreos } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      {/* Topbar */}
      <div className={styles.topbar}></div>

      {/* Navbar */}
      <div className={styles.navbar}>
        {/* Hamburger Menu */}
        <div className={styles.menu} onClick={handleMenuToggle}>
         {isMenuOpen? <IoIosClose />: <CgMenuOreos />} 
        </div>

        {/* Navigation Links */}
        <ul
  className={`${styles.navLinks} ${
    isMenuOpen && window.innerWidth <= 768 ? styles.menuBar : ""
  }`}
  onClick={handleMenuToggle}
>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.li} ${styles.active}` : styles.li
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? `${styles.li} ${styles.active}` : styles.li
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.li} ${styles.active}` : styles.li
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? `${styles.li} ${styles.active}` : styles.li
            }
          >
            Blog
          </NavLink>
          {/* Language Selector */}
          <NavLink className={styles.li}>
            <select>
              <option value="ENG">ENG</option>
            </select>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
