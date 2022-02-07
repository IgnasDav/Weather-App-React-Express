import { useState, createContext } from "react";

const DEFAULT_LOCATION = false;
const DEFAULT_LOCATION_SUCCESS = [];
const DEFAULT_LOCATION_ERROR = null;

const LocationContext = createContext({
  forecasts: DEFAULT_LOCATION_SUCCESS,
  loading: DEFAULT_LOCATION,
  error: DEFAULT_LOCATION_ERROR,
  setLocation: () => {
    throw new Error(
      "You are trying to use location functionality outside LocationProvider "
    );
  },
  setLocationLoading: () => {
    throw new Error(
      "You are trying to use location functionality outside LocationProvider "
    );
  },
  setLocationError: () => {
    throw new Error(
      "You are trying to use location functionality outside LocationProvider "
    );
  },
});

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(DEFAULT_LOCATION_SUCCESS);
  const [locationLoading, setLocationLoading] = useState(DEFAULT_LOCATION);
  const [locationError, setLocationError] = useState(DEFAULT_LOCATION_ERROR);

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        locationLoading,
        setLocationLoading,
        locationError,
        setLocationError,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
export default LocationContext;
export { LocationProvider };
