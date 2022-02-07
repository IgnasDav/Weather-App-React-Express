//Styles
import { Wrapper, Content } from "./SmallerCard.styles";

const SmallerCard = ({
  symbolPhrase,
  maxTemp,
  minTemp,
  date,
  sunrise,
  sunset,
}) => {
  const dateString = new Date(date).toLocaleDateString("en-LT", {
    weekday: "long",
  });

  return (
    <Wrapper>
      <Content>
        <h2>{dateString}</h2>
        <h2>{date}</h2>
        <h2>Max Temparature: {maxTemp} °C</h2>
        <h2>Min Temparature: {minTemp} °C</h2>
        <h2>Weather Code: {symbolPhrase}</h2>
        <h2>Sunrise: {sunrise} AM</h2>
        <h2>Sunset: {sunset} PM</h2>
      </Content>
    </Wrapper>
  );
};

export default SmallerCard;
