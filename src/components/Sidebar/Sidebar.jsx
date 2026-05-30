import { WiDaySunny, WiCloud, WiRain, WiStrongWind, WiHumidity } from 'react-icons/wi';
import { menuItems } from '../../data/weatherData';
import styles from './Sidebar.module.css';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'dashboard': return <WiDaySunny />;
    case 'weather': return <WiCloud />;
    case 'forecast': return <WiRain />;
    case 'maps': return <WiStrongWind />;
    case 'settings': return <WiHumidity />;
    default: return <WiDaySunny />;
  }
};

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.menuSection}>
        <h3 className={styles.menuTitle}>Menu</h3>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                className={`${styles.menuItem} ${item.active ? styles.active : ''}`}
              >
                <span className={styles.icon}>{getIcon(item.icon)}</span>
                <span className={styles.text}>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.locationSection}>
        <h3 className={styles.menuTitle}>Popular Locations</h3>
        <ul className={styles.locationList}>
          <li className={styles.locationItem}>Jakarta</li>
          <li className={styles.locationItem}>Surabaya</li>
          <li className={styles.locationItem}>Bandung</li>
          <li className={styles.locationItem}>Yogyakarta</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
