import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CurrentWeather, { CurrentWeatherProps } from './CurrentWeather';
import { TemperatureUnit } from '@/utils/types/weather.types';
import { formatLastUpdateDate } from '@/utils/helpers/formatDate';

const defaultProps: CurrentWeatherProps = {
  currentWeather: {
    celTemperature: 20,
    fahTemperature: 70,
    humidity: 50,
    windSpeed: 10,
    lastUpdate: '2023-09-16 05:30',
    condition: {
      text: 'Sunny',
      icon: './weather-icon.png',
    },
    location: {
      name: 'London',
      country: 'United Kingdom',
    },
  },
  tempUnit: TemperatureUnit.CEL,
  onToggleTempUnit: () => {},
};

const renderComponent = (props?: CurrentWeatherProps) => {
  const propsToRender = props || defaultProps;

  return render(<CurrentWeather {...propsToRender} />);
};

describe('<CurrentWeather />', () => {
  it('should show current weather info correctly, (Temperature (Celsius), Humidity, Wind Speed, Last Update, Icon, City & Country)', () => {
    renderComponent();
    const transformedLastUpdate = formatLastUpdateDate(
      defaultProps.currentWeather.lastUpdate
    );

    const infoList = [
      defaultProps.currentWeather.celTemperature,
      defaultProps.currentWeather.humidity,
      defaultProps.currentWeather.windSpeed,
      defaultProps.currentWeather.location.name,
      defaultProps.currentWeather.location.country,
      transformedLastUpdate,
    ];

    const weatherIcon = screen.getByRole('img', {
      name: new RegExp(defaultProps.currentWeather.condition.text, 'i'),
    });

    infoList.forEach((info) => {
      expect(
        screen.getByText(new RegExp(info.toString(), 'i'))
      ).toBeInTheDocument();
    });

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should show correct fahrenheit temperature if unit is Fahrenheit', () => {
    let changeTempUnitProps = {
      ...defaultProps,
      tempUnit: TemperatureUnit.FAH,
    };
    renderComponent(changeTempUnitProps);

    expect(
      screen.getByText(changeTempUnitProps.currentWeather.fahTemperature)
    ).toBeInTheDocument();

    changeTempUnitProps = {
      ...defaultProps,
      tempUnit: TemperatureUnit.CEL,
    };
  });
});
