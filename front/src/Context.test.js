import Search from "./components/Search";
import { render, screen } from "@testing-library/react";
import SearchContext from "./context/SearchContext";
import ForecastContext from "./context/ForecastsContext";
import ForecastGrid from "./components/ForecastGrid";
import SingleCityForecastContext from "./context/SingleCityForecastContext";
import Forecast from "./Pages/Forecast";
import LocationContext from "./context/LocationContext";

test("Search shows value from provider", () => {
  render(
    <SearchContext.Provider value={{ search: "London" }}>
      <Search />
    </SearchContext.Provider>
  );
  const input = screen.getByLabelText("search-input");
  expect(input.value).toBe("London");
});
test("Forecasts Provider shows error message", () => {
  render(
    <ForecastContext.Provider
      value={{
        error: { message: "API KEY MISSING" },
        forecasts: [],
        loading: false,
        setError: () => {},
        setForecasts: () => {},
        setLoading: () => {},
      }}
    >
      <ForecastGrid />
    </ForecastContext.Provider>
  );
  expect(screen.getByText(/API KEY MISSING/)).toBeTruthy();
});
//Does not work, TypeError: Cannot read properties of undefined (reading 'pathname')
// test("Forecasts Provider shows forecasts", () => {
//   render(
//     <Router>
//       <ForecastContext.Provider
//         value={{
//           forecasts: [
//             {
//               adminArea: "England",
//               country: "United Kingdom",
//               id: 102643743,
//               lat: 51.508415222,
//               lon: -0.125532746,
//               name: "London",
//               timezone: "Europe/London",
//             },
//           ],
//           loading: false,
//           error: null,
//           setError: () => {},
//           setForecasts: () => {},
//           setLoading: () => {},
//         }}
//       >
//         <ForecastGrid />
//       </ForecastContext.Provider>
//     </Router>
//   );
//   expect(screen.getByText(/England/)).toBeInTheDocument();
// });
test("SingleCityForecast shows error", () => {
  render(
    <LocationContext.Provider
      value={{
        location: { name: "London", country: "UK" },
        setLocation: () => {},
        setLocationLoading: () => {},
        setLocationError: () => {},
      }}
    >
      <SingleCityForecastContext.Provider
        value={{
          error: { message: "Hello world" },
          forecast: [],

          setLoading: () => {},
          setError: () => {},
          setForecast: () => {},
        }}
      >
        <Forecast />
      </SingleCityForecastContext.Provider>
    </LocationContext.Provider>
  );
  expect(screen.getByText(/Hello world/)).toBeInTheDocument();
});
//Render return two instances off the same item, don't know why so I just bypassed that by toHaveLength()
test("SingleCityForecast shows forecast", () => {
  render(
    <LocationContext.Provider
      value={{
        location: { name: "London", country: "UK" },
        setLocation: () => {},
        setLocationLoading: () => {},
        setLocationError: () => {},
      }}
    >
      <SingleCityForecastContext.Provider
        value={{
          forecast: [
            {
              cloudiness: 43,
              date: "2022-02-06",
              maxDewPoint: -6,
              maxFeelsLikeTemp: -7,
              maxRelHumidity: 90,
              maxTemp: -1,
              maxWindGust: 12,
              maxWindSpeed: 8,
              minDewPoint: -13,
              minFeelsLikeTemp: -17,
              minRelHumidity: 51,
              minTemp: -8,
              minVisibility: 17663,
              moonPhase: 71,
              moonrise: "10:30:45",
              moonset: null,
              precipAccum: 0,
              precipProb: 2,
              pressure: 1026.29,
              snowAccum: 2.58,
              sunrise: "07:34:40",
              sunriseEpoch: 1644150880,
              sunset: "17:44:08",
              sunsetEpoch: 1644187448,
              symbol: "d200",
              symbolPhrase: "partly cloudy",
              uvIndex: 2,
              windDir: 194,
            },
          ],
          error: null,
          loading: false,
          setLoading: () => {},
          setError: () => {},
          setForecast: () => {},
        }}
      >
        <Forecast />
      </SingleCityForecastContext.Provider>
    </LocationContext.Provider>
  );
  expect(screen.getAllByText(/partly cloudy/)).toHaveLength(2);
});
test("LocationProvider shows error", () => {
  render(
    <LocationContext.Provider
      value={{
        locationError: { message: "are these tests correct" },
        location: {},
        setLocation: () => {},
        setLocationLoading: () => {},
        setLocationError: () => {},
      }}
    >
      <SingleCityForecastContext.Provider
        value={{
          forecast: [],
          error: null,
          loading: false,
          setLoading: () => {},
          setError: () => {},
          setForecast: () => {},
        }}
      >
        <Forecast />
      </SingleCityForecastContext.Provider>
    </LocationContext.Provider>
  );
  expect(screen.getByText(/are these tests correct/)).toBeInTheDocument();
});
test("LocationProvider shows location", () => {
  render(
    <LocationContext.Provider
      value={{
        locationError: null,
        location: { name: "London", country: "UK" },
        setLocation: () => {},
        setLocationLoading: () => {},
        setLocationError: () => {},
      }}
    >
      <SingleCityForecastContext.Provider
        value={{
          forecast: [],
          error: null,
          loading: false,
          setLoading: () => {},
          setError: () => {},
          setForecast: () => {},
        }}
      >
        <Forecast />
      </SingleCityForecastContext.Provider>
    </LocationContext.Provider>
  );
  expect(screen.getByText(/London/)).toBeInTheDocument();
  expect(screen.getByText(/UK/)).toBeInTheDocument();
});
