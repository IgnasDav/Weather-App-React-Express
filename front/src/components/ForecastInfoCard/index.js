import content from "../../content";
import { useSelector } from "react-redux";
//Components
import SmallerCard from "../SmallerCard";
//Styles
import { Wrapper, CurrentInfo, Forecast } from "./ForecastInfoCard.styles";

const ForecastInfoCard = ({
  maxTemp,
  minTemp,
  sunrise,
  sunset,
  maxWindSpeed,
  city,
  country,
  symbolPhrase,
}) => {
  const forecast = useSelector((state) =>
    content.selectors.selectSingleForecast(state)
  );
  return (
    <Wrapper>
      <h1>Current Days Weather</h1>
      <CurrentInfo>
        <div className="info info--1">
          <h2>Max Temp: {maxTemp} °C</h2>
          <h2>Min Temp: {minTemp} °C</h2>
          <h2>Sunrise: {sunrise} AM</h2>
          <h2>Sunset: {sunset} PM</h2>
        </div>
        <div className="info info--2">
          <h2>Max Wind speed: {maxWindSpeed} M/S</h2>
          <h2>Weather Code: {symbolPhrase}</h2>
        </div>
        <div className="location">
          <h2>Country: {country}</h2>
          <h2>City: {city}</h2>
        </div>
      </CurrentInfo>
      <Forecast>
        {forecast.map((f, i) => (
          <SmallerCard
            key={i}
            symbolPhrase={f.symbolPhrase}
            maxTemp={f.maxTemp}
            minTemp={f.minTemp}
            date={f.date}
            sunrise={f.sunrise}
            sunset={f.sunset}
          />
        ))}
      </Forecast>
    </Wrapper>
  );
};
export default ForecastInfoCard;
