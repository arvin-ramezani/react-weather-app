import { FC, useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import SearchForm from '../SearchForm/SearchForm';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ForecastList from '../ForecastList/ForecastList';
import {
  ICurrentWeather,
  IForecast,
  TemperatureUnit,
} from '@/utils/types/weather.types';
import { transformWeatherResponse } from '@/utils/helpers/transformResponse';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
import { createUrl } from '@/utils/helpers/createUrl';
import Notification from '@/components/ui/Notification/Notification';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@/utils/helpers/localStorage';
import { LocalStorageDataName } from '@/utils/types/localStorage.type';
import classes from './Weather.module.css';

const Weather: FC = () => {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather | null>(
    null
  );

  const [forecastList, setForecastList] = useState<IForecast[]>([]);
  const [tempUnit, setTempUnit] = useState<TemperatureUnit>(
    TemperatureUnit.CEL
  );
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const toggleTempUnitHandler = () => {
    setTempUnit((prevUnit) =>
      prevUnit === TemperatureUnit.CEL
        ? TemperatureUnit.FAH
        : TemperatureUnit.CEL
    );
  };

  const transformAndSetState = (weatherRes: any) => {
    if (weatherRes.error) {
      setErrorText(weatherRes.error.message);
      return;
    }

    const { currentWeather, forecastList } =
      transformWeatherResponse(weatherRes);

    saveToLocalStorage(
      LocalStorageDataName.CITY_NAME,
      currentWeather.location.name
    );
    setCurrentWeather(currentWeather);
    setForecastList(forecastList);
  };

  const fetchWeather = useCallback((city: string) => {
    const url = createUrl(city);
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => transformAndSetState(data))
      .catch((err) => setErrorText(err?.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const savedCityName = getFromLocalStorage(LocalStorageDataName.CITY_NAME);
    const savedTempUnit = getFromLocalStorage(LocalStorageDataName.TEMP_UNIT);

    savedTempUnit && setTempUnit(savedTempUnit as TemperatureUnit);
    savedCityName && fetchWeather(savedCityName);
  }, [getFromLocalStorage, fetchWeather]);

  useEffect(() => {
    saveToLocalStorage(LocalStorageDataName.TEMP_UNIT, tempUnit);
  }, [tempUnit, saveToLocalStorage]);

  // useEffect(() => {
  //   function getLocation() {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((loc) => {
  //         console.log('loc', loc);
  //       });
  //     }
  //   }

  //   getLocation();
  // }, []);

  return (
    <section className={classes.weather}>
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
