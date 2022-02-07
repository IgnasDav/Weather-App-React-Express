import { useState, createContext } from "react";

const DEFAULT_FORECAST = false;
const DEFAULT_FORECAST_SUCCESS = [];
const DEFAULT_FORECAST_ERROR = null;

const SingleCityForecastContext = createContext({
  forecast: DEFAULT_FORECAST_SUCCESS,
  loading: DEFAULT_FORECAST,
  error: DEFAULT_FORECAST_ERROR,
  setError: () => {
    throw new Error(
      "You are trying to use single city forecast functionality outside SingleCityProvider"
    );
  },
  setLoading: () => {
    throw new Error(
      "You are trying to use single city forecast functionality outside SingleCityProvider"
    );
  },
  setForecast: () => {
    throw new Error(
      "You are trying to use single city forecast functionality outside SingleCityProvider"
    );
  },
});

const SingleCityForecastProvider = ({ children }) => {
  const [error, setError] = useState(DEFAULT_FORECAST_ERROR);
  const [loading, setLoading] = useState(DEFAULT_FORECAST);
  const [forecast, setForecast] = useState(DEFAULT_FORECAST_SUCCESS);

  return (
    <SingleCityForecastContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        forecast,
        setForecast,
      }}
    >
      {children}
    </SingleCityForecastContext.Provider>
  );
};
export default SingleCityForecastContext;
export { SingleCityForecastProvider };
