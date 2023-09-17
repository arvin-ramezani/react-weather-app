import { it, expect } from 'vitest';

import { transformWeatherResponse } from './transformResponse';
import { mockAPIResponse } from '@/test/__mocks__/mock-data';

it('should correctly transform returned API data from weather api', () => {
  const { currentWeather, forecastList } =
    transformWeatherResponse(mockAPIResponse);

  const {
    celTemperature,
    fahTemperature,
    humidity,
    windSpeed,
    lastUpdate,
    condition: { icon, text },
    location: { country, name },
  } = currentWeather;

  expect(celTemperature).toBeTypeOf('number');
  expect(fahTemperature).toBeTypeOf('number');
  expect(humidity).toBeTypeOf('number');
  expect(windSpeed).toBeTypeOf('number');
  expect(lastUpdate).toBeTypeOf('string');
  expect(icon).toBeTypeOf('string');
  expect(text).toBeTypeOf('string');
  expect(country).toBeTypeOf('string');
  expect(name).toBeTypeOf('string');

  const {
    maxCelTemperature,
    maxFahTemperature,
    minCelTemperature,
    minFahTemperature,
    avgHumidity,
    avgWindSpeed,
    date,
    condition: { icon: forecastConditionIcon, text: forecastConditionText },
    dayNumber,
  } = forecastList[0];

  expect(maxCelTemperature).toBeTypeOf('number');
  expect(maxFahTemperature).toBeTypeOf('number');
  expect(minCelTemperature).toBeTypeOf('number');
  expect(minFahTemperature).toBeTypeOf('number');
  expect(avgHumidity).toBeTypeOf('number');
  expect(avgWindSpeed).toBeTypeOf('number');
  expect(date).toBeTypeOf('string');
  expect(forecastConditionIcon).toBeTypeOf('string');
  expect(forecastConditionText).toBeTypeOf('string');
  expect(dayNumber).toBeTypeOf('number');
});
