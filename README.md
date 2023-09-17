# Weather Application

This is a weather application built using ViteJS, ReactJS, and TypeScript. It utilizes the [https://www.weatherapi.com/](weatherapi.com) API to fetch the current weather and a 5-day forecast based on the user's search by city name.

## Prerequisites

Before running this application, make sure you have obtained an API key from [https://www.weatherapi.com/](weatherapi.com). It's free and you will need to provide this API key inside a .env file in the root directory of the project.

## Installation

1. Clone the repository to your local machine.

```
git clone https://github.com/arvin-ramezani/react-weather-app.git
```

2. Navigate to the project directory:

```
cd react-weather-app
```

3. Run yarn command to install the project dependencies.

```
yarn install
```

## Usage

To run the application in development mode, use the following command:

```
yarn dev
```

This will start a local development server and open the application in your default browser.
By Default:

[http://localhost:5173/](http://localhost:5173/)

To build the application for production, use the following command:

```
yarn build
```

This will create a `dist` folder in the root directory, containing the production-ready build of the application.

## Testing

This project includes unit tests that are implemented using Vitest and Testing Library React.

To run the tests, use the following command:

```
yarn test
```

This will execute the unit tests and display the test results.

## Features

- Search by City Name: Users can enter a city name in the search bar to fetch the current weather and a 5-day forecast for that city.
- Current Weather: The application displays the current temperature, weather conditions, wind speed, humidity, and visibility for the selected city.
- 5-Day Forecast: Users can view a forecast for the next 5 days, including temperature highs and lows, weather conditions, and precipitation.

## Technologies Used

- ViteJS: A fast development server and build tool for modern web applications.
- ReactJS: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- [https://www.weatherapi.com/](weatherapi.com) API: An API service for retrieving weather data.

## Deployment

The application has been deployed on Vercel and can be accessed [here](https://react-weather-app-iota-five.vercel.app/).

## License

This project is licensed under the [MIT License](LICENSE).

Weatherapi (https://www.weatherapi.com/)
Free Weather API - WeatherAPI.com
WeatherAPI.com free weather API and weather data and Geolocation API (JSON and XML) for hourly, daily and 15 min interval weather, historical data, bulk request, astronomy,
