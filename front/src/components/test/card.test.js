import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const Card = ({ id, country, city, adminArea, lon, lat, timezone }) => {
  return (
    <>
      {country && <p>Country: {country}</p>}
      {city && <p>City: {city}</p>}
      {timezone && <p>Timezone: {timezone}</p>}
      {adminArea && <p>Admin Area: {adminArea}</p>}
      {lon && <p>Lon: {lon}</p>}
      {lat && <p>Lat: {lat}</p>}
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
describe("Card conmponent render", () => {
  it("render card with correct props", () => {
    act(() => {
      render(<Card country="Lithuania" />, container);
    });
    expect(container.textContent).toBe("Country: Lithuania");
  });
});
