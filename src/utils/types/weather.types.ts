export interface IForecast {
  dayNumber: number;
  date: string;
  celAvgTemperature: number;
  furAvgTemperature: number;
  avgHumidity: number;
  avgWindSpeed: number;
  condition: {
    text: string;
    icon: string;
  };
}
