export const mockCurrentWeatherData = {
  celTemperature: 24,
  fahTemperature: 75.2,
  humidity: 74,
  lastUpdate: '2023-09-16 18:30',
  windSpeed: 10,
  location: { name: 'Babol', country: 'Iran' },
  condition: {
    text: 'Partly cloudy',
    icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
  },
};

export const mockForecastData = [
  {
    avgHumidity: 69,
    avgWindSpeed: 10,
    condition: {
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      text: 'Partly cloudy',
    },
    date: '2023-09-17',
    dayNumber: 1,
    maxCelTemperature: 27.8,
    maxFahTemperature: 82,
    minCelTemperature: 19.7,
    minFahTemperature: 67.5,
  },

  {
    avgHumidity: 81,
    avgWindSpeed: 9,
    condition: {
      text: 'Patchy rain possible',
      icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
    },
    date: '2023-09-18',
    dayNumber: 2,
    maxCelTemperature: 23.1,
    maxFahTemperature: 73.6,
    minCelTemperature: 20.9,
    minFahTemperature: 69.6,
  },
];

export const mockAPIResponse = {
  current: {
    temp_c: 23,
    temp_f: 73.4,
    humidity: 38,
    wind_kph: 10,
    last_updated: '2023-09-17 00:45',
    condition: {
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
      text: 'Clear',
    },
  },
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: 25.3,
          mintemp_c: 25.3,
          maxtemp_f: 77.6,
          mintemp_f: 77.6,
          avghumidity: 30,
          maxwind_kph: 13,
          condition: {
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            text: 'Sunny',
          },
        },
        date: '2023-09-17',
      },

      {
        day: {
          maxtemp_c: 25.2,
          mintemp_c: 25.2,
          maxtemp_f: 77.3,
          mintemp_f: 77.3,
          avghumidity: 29,
          maxwind_kph: 12.6,
          condition: {
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            text: 'Sunny',
          },
        },
        date: '2023-09-18',
      },

      {
        day: {
          maxtemp_c: 24.1,
          mintemp_c: 24.1,
          maxtemp_f: 75.3,
          mintemp_f: 75.3,
          avghumidity: 33,
          maxwind_kph: 11.2,
          condition: {
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            text: 'Sunny',
          },
        },
        date: '2023-09-19',
      },
    ],
  },
  location: {
    country: 'Iran',
    name: 'Tehran',
  },
};
