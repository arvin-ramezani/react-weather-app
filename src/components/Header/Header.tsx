import { FC } from 'react';

import LogoImage from '../../assets/logo.png';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={LogoImage}
          alt='Weather App'
        />
        <span>WeatherLy</span>
      </div>
    </header>
  );
};

export default Header;
