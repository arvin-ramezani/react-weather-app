import { FC } from 'react';

import Header from './components/Header/Header';
import MainBackground from './components/MainBackground/MainBackground';
import Weather from './components/Weather/Weather/Weather';
import './App.css';

const App: FC = () => {
  return (
    <>
      <MainBackground />

      <Header />

      <Weather />
    </>
  );
};

export default App;
