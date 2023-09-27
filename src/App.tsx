import { FC } from 'react';

import Header from './components/Header/Header';
import Weather from './components/Weather/Weather/Weather';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Header />

      <Weather />
    </>
  );
};

export default App;
