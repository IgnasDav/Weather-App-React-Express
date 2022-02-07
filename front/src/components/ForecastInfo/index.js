import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiSettings from "../../API";
import SingleCityForecastContext from "../../context/SingleCityForecastContext";
//Components
import { Spinner } from "../Spinner/Spinner.styles";
import ForecastInfoCard from "../ForecastInfoCard";
//Styles
import { Wrapper, Content } from "./ForecastInfo.styles";
import LocationContext from "../../context/LocationContext";

const ForecastInfo = () => {
  const { id } = useParams();
  const [postError, setPostError] = useState(null);
  const { error, setError, loading, setLoading, forecast, setForecast } =
    useContext(SingleCityForecastContext);
  const {
    location,
    setLocation,
    locationLoading,
    setLocationLoading,
    locationError,
    setLocationError,
  } = useContext(LocationContext);
  const getSingleForecast = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiSettings.fetch7DayForecast(id);
      let { forecast } = response;
      forecast.forecast.length = 7;
      setForecast(forecast.forecast);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [setError, setForecast, setLoading, id]);
  const postUserWeatherData = useCallback(async () => {
    try {
      const response = await apiSettings.postUserForecastData({
        forecast: forecast[0],
      });
      return await response.json();
    } catch (e) {
      setPostError(e);
    }
  }, [forecast]);
  const getLocation = useCallback(async () => {
    try {
      setLocationLoading(true);
      const response = await apiSettings.getLocation(id);
      const { location } = response;
      setLocation(location);
    } catch (e) {
      setLocationError(e);
    }
    setLocationLoading(false);
  }, [setLocationLoading, setLocation, id, setLocationError]);
  useEffect(() => {
    postUserWeatherData();
  }, [postUserWeatherData]);
  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    getSingleForecast();
  }, [getSingleForecast]);
  useEffect(() => {
    if (location.length) setLocationError(null);
  }, [location, setLocationError]);
  useEffect(() => {
    if (forecast.length) setError(null);
  }, [forecast, setError]);
  return (
    <Wrapper>
      <Content>
        {error && <h1>{error.message}</h1>}
        {locationError && <h1>{locationError.message}</h1>}
        {(loading || locationLoading) && <Spinner />}
        {!loading && !error && !locationLoading && !locationError && (
          <ForecastInfoCard
            maxTemp={forecast[0]?.maxTemp}
            minTemp={forecast[0]?.minTemp}
            sunrise={forecast[0]?.sunrise}
            sunset={forecast[0]?.sunset}
            maxWindSpeed={forecast[0]?.maxWindSpeed}
            city={location.name}
            country={location.country}
            symbolPhrase={forecast[0]?.symbolPhrase}
          />
        )}
      </Content>
    </Wrapper>
  );
};

export default ForecastInfo;
