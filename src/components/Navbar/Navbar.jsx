import { WiDaySunny, WiCloud, WiRain, WiStrongWind, WiHumidity, WiThermometer, WiSunset, WiSunrise } from 'react-icons/wi';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <WiDaySunny className={styles.logoIcon} />
        <span>WeatherApp</span>
      </div>
      
      <form className={styles.searchBar} onSubmit={handleSearch}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search city..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
        />
      </form>

      <button className={styles.menuBtn}>
        <FiMenu />
      </button>
    </nav>
  );
};

export default Navbar;
