import { it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Weather from './Weather';
import { createServer } from '@/test/createServer';
import { mockAPIResponse } from '@/test/__mocks__/mock-data';
import { LocalStorageDataName } from '@/utils/types/localStorage.type';
import { TemperatureUnit } from '@/utils/types/weather.types';

vi.mock('@/components/ui/LoadingSpinner/LoadingSpinner');
vi.mock('@/components/ui/Notification/Notification.tsx');

createServer([
  {
    path: 'http://api.weatherapi.com/v1/forecast.json',
    res: () => {
      return mockAPIResponse;
    },
  },
]);

it('shows correct heading text', () => {
  render(<Weather />);

  const headingWelcome = screen.getByText(/welcome/i);
  const headingBrandName = screen.getByText(/WeatherLy/i);

  expect(headingWelcome).toBeInTheDocument();
  expect(headingBrandName).toBeInTheDocument();
});

it('shows <P> tag to encourage users to search for a city by name', async () => {
  render(<Weather />);

  expect(
    screen.getByText(
      /Search for a city to get current weather and a 5-day forecast./i
    )
  );
});

it('should save searched city name to local storage', async () => {
  render(<Weather />);

  const cityName = 'Tehran';

  const input = screen.getByRole('searchbox', { name: /City Search/i });
  const button = screen.getByRole('button', { name: /search Weather/i });

  await userEvent.type(input, cityName);
  await userEvent.click(button);

  await screen.findByText(new RegExp(cityName, 'i'));

  expect(localStorage.setItem).toHaveBeenCalledWith(
    LocalStorageDataName.CITY_NAME,
    cityName
  );
});

it('should toggle temperature unit ', async () => {
  render(<Weather />);

  await screen.findByText(/tehran/i);

  const toggler = screen.getByRole('button', {
    name: /Toggle Temperature Unit/i,
  });

  expect(screen.getByRole('img', { name: /celsius/i })).toBeInTheDocument();

  await userEvent.click(toggler);

  expect(screen.getByRole('img', { name: /fahrenheit/i })).toBeInTheDocument();
});

it('should save current temperature unit to localStorage', async () => {
  render(<Weather />);

  await screen.findByText(/tehran/i);

  const toggler = screen.getByRole('button', {
    name: /Toggle Temperature Unit/i,
  });

  await userEvent.click(toggler);

  expect(localStorage.setItem).toHaveBeenCalledWith(
    LocalStorageDataName.TEMP_UNIT,
    TemperatureUnit.FAH
  );
});

it('should fetch and display current weather and forecast for the city that the user searched', async () => {
  render(<Weather />);

  const currentWeatherBlock = await screen.findByLabelText(
    /Current Weather Information/i
  );

  const forecastList = await screen.findByRole('list', {
    name: /Forecast List/i,
  });

  const forecastItem = await screen.findAllByRole('listitem', {
    name: /Forecast/i,
  });

  expect(currentWeatherBlock).toBeInTheDocument();
  expect(forecastList).toBeInTheDocument();
  expect(forecastItem).toHaveLength(2);
});
