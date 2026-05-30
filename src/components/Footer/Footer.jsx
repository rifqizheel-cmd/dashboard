import { WiDaySunny } from 'react-icons/wi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <WiDaySunny className={styles.icon} />
          <span>WeatherApp</span>
        </div>
        <p className={styles.copyright}>
          &copy; 2026 WeatherApp. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
