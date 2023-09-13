import ShowTemperature from '../ShowTemperature/ShowTemperature';
import PartlyCloudyIcon from '../../../assets/icons/partly-cloudy-icon.png';
import ShowHumidity from '../ShowHumidity/ShowHumidity';
import ShowWindSpeed from '../ShowWindSpeed/ShowWindSpeed';
import classes from './WeatherItem.module.css';

const WeatherItem = () => {
  return (
    <li className={classes['weather-item']}>
      <h4>Sun</h4>

      <div className={classes['temperature-block']}>
        <ShowTemperature deg={27} />

        <div className={classes['weather-item-image-wrapper']}>
          <img
            src={PartlyCloudyIcon}
            alt='Weather Condition Icon'
          />
        </div>
      </div>

      <div className={classes['details-block']}>
        <ShowHumidity humidity={75} />

        <ShowWindSpeed windSpeed={14} />
      </div>
    </li>
  );
};

export default WeatherItem;
