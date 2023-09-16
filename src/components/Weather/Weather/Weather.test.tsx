import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Weather from './Weather';
import { createServer } from '@/test/createServer';
import { createUrl } from '@/utils/helpers/createUrl';

vi.mock('@/components/ui/LoadingSpinner/LoadingSpinner.tsx');
vi.mock('@/components/ui/Notification/Notification.tsx');

const mockCurrentWeatherData = {
  celTemperature: 24,
  condition: {
    text: 'Partly cloudy',
    icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
  },
  fahTemperature: 75.2,
  humidity: 74,
  lastUpdate: '2023-09-16 18:30',
  location: { name: 'Babol', country: 'Iran' },
  windSpeed: 10,
};

const mockForecastData = [
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

describe('<Weather />', () => {
  it('shows correct heading text', () => {
    render(<Weather />);

    const headingWelcome = screen.getByText(/welcome/i);
    const headingBrandName = screen.getByText(/WeatherLy/i);

    expect(headingWelcome).toBeInTheDocument();
    expect(headingBrandName).toBeInTheDocument();
  });
});

describe('When no city found at localStorage', () => {
  createServer([
    {
      path: createUrl('London'),
      res: (req, res, ctx) => {
        console.log(req.url);
        return {
          currentWeather: null,
          forecastList: null,
        };
      },
    },
  ]);

  it('shows <P> tag to encourage users to search for a city by name', async () => {
    render(<Weather />);

    expect(screen.getByText(/search a city to get current weather/i));
  });
});
