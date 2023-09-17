import { useCallback, useEffect, useState } from 'react';

import { createUrl } from '@/utils/helpers/createUrl';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@/utils/helpers/localStorage';
import { transformWeatherResponse } from '@/utils/helpers/transformResponse';
import { LocalStorageDataName } from '@/utils/types/localStorage.type';
import {
  ICurrentWeather,
  IForecast,
  TemperatureUnit,
} from '@/utils/types/weather.types';

const WeatherLogic = () => {
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

  return {
    loading,
    currentWeather,
    forecastList,
    errorText,
    fetchWeather,
    tempUnit,
    toggleTempUnitHandler,
    setErrorText,
  };
};

export default WeatherLogic;
