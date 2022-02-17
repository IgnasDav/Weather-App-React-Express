import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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
  return (
    <>
      <h1>Current Days Weather</h1>
      <>
        <div className="info info--1">
          {maxTemp && <h2>Max Temp: {maxTemp} °C</h2>}
          {minTemp && <h2>Min Temp: {minTemp} °C</h2>}
          {sunrise && <h2>Sunrise: {sunrise} AM</h2>}
          {sunset && <h2>Sunset: {sunset} PM</h2>}
        </div>
        <div className="info info--2">
          {maxWindSpeed && <h2>Max Wind speed: {maxWindSpeed} M/S</h2>}
          {symbolPhrase && <h2>Weather Code: {symbolPhrase}</h2>}
        </div>
        <div className="location">
          {country && <h2>Country: {country}</h2>}
          {city && <h2>City: {city}</h2>}
        </div>
      </>
    </>
  );
};
let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.append(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  document.body.append(container);
});
//Im guessing this is a wrongly written test
describe("Card conmponent render", () => {
  it("render card with correct props", () => {
    act(() => {
      render(<ForecastInfoCard city="FooBar" />, container);
    });
    expect(container.textContent).toBe("Current Days WeatherCity: FooBar");
  });
});
