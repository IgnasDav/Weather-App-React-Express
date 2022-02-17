import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const SmallerCard = ({
  symbolPhrase,
  maxTemp,
  minTemp,
  date,
  sunrise,
  sunset,
}) => {
  //   const dateString = new Date(date).toLocaleDateString("en-LT", {
  //     weekday: "long",
  //   });

  return (
    <>
      <>
        {false && <h2>{"Hello"}</h2>}
        {date && <h2>{date}</h2>}
        {maxTemp && <h2>Max Temparature: {maxTemp} °C</h2>}
        {minTemp && <h2>Min Temparature: {minTemp} °C</h2>}
        {symbolPhrase && <h2>Weather Code: {symbolPhrase}</h2>}
        {sunrise && <h2>Sunrise: {sunrise} AM</h2>}
        {sunset && <h2>Sunset: {sunset} PM</h2>}
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
      render(<SmallerCard sunrise="FooBar" />, container);
    });
    expect(container.textContent).toBe("Sunrise: FooBar AM");
  });
});
