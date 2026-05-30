import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import Forecast from '../components/Forecast/Forecast';
import Footer from '../components/Footer/Footer';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <main className={styles.content}>
          <WeatherCard />
          <Forecast />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
