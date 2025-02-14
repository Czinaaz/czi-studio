import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.logoSection} >
            <h3 className={styles.logo}>Ivan Rudenko</h3>
        </Link>
        
        <ul className={styles.navLinks}>
          <li><a href="https://github.com/Czinaaz" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Czinaaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
