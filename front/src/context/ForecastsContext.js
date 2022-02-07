import { useState, createContext } from "react";

const DEFAULT_FORECASTS = false;
const DEFAULT_FORECASTS_SUCCESS = [];
const DEFAULT_FORECASTS_ERROR = null;

const ForecastContext = createContext({
  forecasts: DEFAULT_FORECASTS_SUCCESS,
  loading: DEFAULT_FORECASTS,
  error: DEFAULT_FORECASTS_ERROR,
  setForecasts: () => {
    throw new Error(
      "You are trying to use forecasts functionality outside ForecastsProvider "
    );
  },
  setLoading: () => {
    throw new Error(
      "You are trying to use forecasts functionality outside ForecastsProvider "
    );
  },
  setError: () => {
    throw new Error(
      "You are trying to use forecasts functionality outside ForecastsProvider "
    );
  },
});

const ForecastProvider = ({ children }) => {
  const [forecasts, setForecasts] = useState(DEFAULT_FORECASTS_SUCCESS);
  const [loading, setLoading] = useState(DEFAULT_FORECASTS);
  const [error, setError] = useState(DEFAULT_FORECASTS_ERROR);

  return (
    <ForecastContext.Provider
      value={{ forecasts, setForecasts, loading, setLoading, error, setError }}
    >
      {children}
    </ForecastContext.Provider>
  );
};
export default ForecastContext;
export { ForecastProvider };
