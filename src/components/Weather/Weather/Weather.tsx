import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import SearchForm from '../SearchForm/SearchForm';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ForecastList from '../ForecastList/ForecastList';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
import Notification from '@/components/ui/Notification/Notification';
import WeatherLogic from './WeatherLogic';
import MainBackground, {
  ConditionText,
} from '@/components/MainBackground/MainBackground';
import classes from './Weather.module.css';

const Weather: FC = () => {
  const {
    loading,
    currentWeather,
    forecastList,
    errorText,
    fetchWeather,
    tempUnit,
    toggleTempUnitHandler,
    setErrorText,
  } = WeatherLogic();

  const conditionText = currentWeather?.condition?.text as ConditionText;

  return (
    <section className={classes.weather}>
      <MainBackground
        isDay={currentWeather?.isDay}
        conditionText={conditionText}
      />

      <h1>
        Welcome to <span>WeatherLy</span>
      </h1>

      <AnimatePresence>
        {loading && (
          <LoadingSpinner
            key='loadingSpinner'
            show={loading}
          />
        )}

        {!!errorText && (
          <Notification
            key='notification'
            content={errorText}
            show={!!errorText}
            onClose={setErrorText.bind(null, '')}
          />
        )}
      </AnimatePresence>

      <SearchForm onSearch={fetchWeather} />

      {currentWeather && (
        <>
          <CurrentWeather
            currentWeather={currentWeather}
            tempUnit={tempUnit}
            onToggleTempUnit={toggleTempUnitHandler}
          />
          <ForecastList
            weatherList={forecastList}
            tempUnit={tempUnit}
          />
        </>
      )}

      {!currentWeather && !loading && (
        <p className={classes['weather-placeholder']}>
          Search for a city to get current weather and a 5-day forecast.
        </p>
      )}
    </section>
  );
};

export default Weather;
