import { useCallback, useContext, useEffect, useState } from "react";
import apiSettings from "../../API";
import ForecastContext from "../../context/ForecastsContext";
import SearchContext from "../../context/SearchContext";
import _ from "lodash";
//Styles
import { Wrapper, Content } from "./ForecastGrid.styles";
//Component
import Card from "../Card";
import { Spinner } from "../Spinner/Spinner.styles";

const ForecastGrid = () => {
  const { forecasts, setForecasts, loading, setLoading, error, setError } =
    useContext(ForecastContext);
  const [postError, setPostError] = useState(null);
  const { search, searchError, inputEl } = useContext(SearchContext);
  const getForecasts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await apiSettings.fetchForecast(search);
      response.forecasts.locations.length = 5;
      setForecasts(response.forecasts.locations);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, [setLoading, setForecasts, setError, search]);
  const postSearchValue = useCallback(async () => {
    try {
      const response = await apiSettings.postUserSearchParam(
        JSON.stringify({ search })
      );
      return response.json();
    } catch (e) {
      setPostError(e);
    }
  }, [setPostError, search]);
  useEffect(() => {
    const timeout = setTimeout(async () => {
      //Logic to check if weather response payload is the same
      //And if it is the same do not log the seach query to server
      //It gives falsy data to us, because on re-render of the page
      //It sends the same value to server so we get two instances of
      //the same searrch query
      //It has a flaw, because we get an extra fetch of payload from the server
      const response = await apiSettings.fetchForecast(search);
      response.forecasts.locations.length = 5;
      if (!_.isEqual(forecasts, response.forecasts.locations)) {
        postSearchValue();
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [postSearchValue, search, inputEl, forecasts]);
  useEffect(() => {
    if (search && !searchError) {
      const timeout = setTimeout(async () => {
        //Duplicate code in two instances, going against DRY principles
        //but couldn't think off a better solution
        const response = await apiSettings.fetchForecast(search);
        response.forecasts.locations.length = 5;
        if (!_.isEqual(forecasts, response.forecasts.locations)) {
          getForecasts();
        }
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [getForecasts, search, searchError, forecasts]);
  useEffect(() => {
    if (forecasts.length || !search) setError(null);
  }, [setError, forecasts, search]);
  useEffect(() => {
    if (!search) {
      setForecasts([]);
    }
  }, [search, setForecasts]);
  return (
    <Wrapper>
      <Content>
        {error && <h1>{error.message}</h1>}
        {loading && <Spinner className="spinner" />}
        {!error &&
          !loading &&
          forecasts?.map((forecast) => (
            <Card
              key={forecast.id}
              id={forecast.id}
              city={forecast.name}
              country={forecast.country}
              lat={forecast.lat}
              lon={forecast.lon}
              adminArea={forecast.adminArea}
              timezone={forecast.timezone}
            />
          ))}
      </Content>
    </Wrapper>
  );
};

export default ForecastGrid;
