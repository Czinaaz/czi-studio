import { NavLink, Link, useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import styles from "./NavBar.module.css";

const NavBar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(styles.responsiveNav);
    };

    return (
        <header className={styles.header}>
            <Link className={styles.logoSection} >
                <h3 className={styles.logo}>Ivan Rudenko</h3>
            </Link>
        <nav ref={navRef} className={styles.nav}>
            <NavLink to="/czi-studio/" className={styles.navLink}>
            Home
            </NavLink>
            <NavLink to="/czi-studio/projects" className={styles.navLink}>
            Projects
            </NavLink>
            <NavLink to="/czi-studio/contact" className={styles.navLink}>
            Contact
            </NavLink>
            <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavbar}>
            <FaTimes />
            </button>
        </nav>
        <button className={styles.navBtn} onClick={showNavbar}>
            <FaBars />
        </button>
        </header>
    );
};

export default NavBar;
