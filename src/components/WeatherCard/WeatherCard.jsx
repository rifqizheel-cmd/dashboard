import { WiDaySunny, WiCloud, WiRain, WiStrongWind, WiHumidity, WiThermometer, WiSunset, WiSunrise } from 'react-icons/wi';
import { weatherData } from '../../data/weatherData';
import styles from './WeatherCard.module.css';

const WeatherCard = () => {
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return <WiDaySunny />;
      case 'cloudy':
      case 'partly cloudy': return <WiCloud />;
      case 'rainy': return <WiRain />;
      default: return <WiDaySunny />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainCard}>
        <div className={styles.locationInfo}>
          <h1 className={styles.city}>{weatherData.city}</h1>
          <p className={styles.date}>Friday, May 30, 2026</p>
        </div>
        
        <div className={styles.weatherInfo}>
          <div className={styles.iconWrapper}>
            {getWeatherIcon(weatherData.condition)}
          </div>
          <div className={styles.tempSection}>
            <span className={styles.temperature}>{weatherData.temperature}</span>
            <span className={styles.condition}>{weatherData.condition}</span>
          </div>
        </div>
        
        <div className={styles.additionalInfo}>
          <div className={styles.infoItem}>
            <WiThermometer className={styles.infoIcon} />
            <span className={styles.infoLabel}>Feels Like</span>
            <span className={styles.infoValue}>{weatherData.feelsLike}</span>
          </div>
          <div className={styles.infoItem}>
            <WiHumidity className={styles.infoIcon} />
            <span className={styles.infoLabel}>Humidity</span>
            <span className={styles.infoValue}>{weatherData.humidity}</span>
          </div>
          <div className={styles.infoItem}>
            <WiStrongWind className={styles.infoIcon} />
            <span className={styles.infoLabel}>Wind</span>
            <span className={styles.infoValue}>{weatherData.wind}</span>
          </div>
          <div className={styles.infoItem}>
            <WiSunrise className={styles.infoIcon} />
            <span className={styles.infoLabel}>UV Index</span>
            <span className={styles.infoValue}>{weatherData.uvIndex}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
