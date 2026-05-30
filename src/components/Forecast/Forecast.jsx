import { WiDaySunny, WiCloud, WiRain } from 'react-icons/wi';
import { weeklyForecast } from '../../data/weatherData';
import styles from './Forecast.module.css';

const Forecast = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'sunny': return <WiDaySunny />;
      case 'cloudy': return <WiCloud />;
      case 'rainy': return <WiRain />;
      default: return <WiDaySunny />;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>7-Day Forecast</h2>
      <div className={styles.forecastList}>
        {weeklyForecast.map((day, index) => (
          <div key={index} className={styles.forecastItem}>
            <div className={styles.dayInfo}>
              <span className={styles.day}>{day.day}</span>
              <span className={styles.date}>{day.date}</span>
            </div>
            <div className={styles.icon}>{getIcon(day.icon)}</div>
            <span className={styles.condition}>{day.condition}</span>
            <div className={styles.tempRange}>
              <span className={styles.high}>{day.high}</span>
              <span className={styles.divider}>|</span>
              <span className={styles.low}>{day.low}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
