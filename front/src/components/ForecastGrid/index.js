import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import content from "../../content";
//Styles
import { Wrapper, Content } from "./ForecastGrid.styles";
//Component
import Card from "../Card";
import { Spinner } from "../Spinner/Spinner.styles";
import apiSettings from "../../API";

const ForecastGrid = () => {
  const [postUserDataError, setPostUserDataError] = useState(null);
  const error = useSelector((state) =>
    content.selectors.selectForecastsError(state)
  );
  const loading = useSelector((state) =>
    content.selectors.selectForecastsLoading(state)
  );
  const forecasts = useSelector((state) =>
    content.selectors.selectForecasts(state)
  );
  //Thought that this would memoize the forecasts, and would prevent re-renders of the component
  //My idea was that javascript stores arrays and  objects as a reference not as a value into the memory,
  //so react sees that forecasts are two different references and re-renders the component,
  //memoization should prevent these re-renders because the values of array doesn't change
  //on re-render the dipatch fires so we get the loading screen, forecasts unmount and then after loading finishes, forecasts mount again
  //To fix this issue we check whether the forecast state and the response we get from api call are the same
  // const memoizedForecasts = useSelector((state) =>
  //   content.selectors.selectMemoizedForecasts(state)
  // );

  const dispatch = useDispatch();
  const search = useSelector((state) => content.selectors.selectSearch(state));
  useEffect(() => {
    if (search) {
      const timeout = setTimeout(async () => {
        const response = await apiSettings.fetchForecast(search);
        response.forecasts.locations.length = 5;
        if (!_.isEqual(forecasts, response.forecasts.locations)) {
          dispatch(content.actions.setForecasts(search));
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [dispatch, search, forecasts]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!search) {
        dispatch(content.actions.deleteForecasts());
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search, dispatch]);

  const postSearchValue = useCallback(async () => {
    try {
      const response = await apiSettings.postUserSearchParam(search);
      return await response;
    } catch (error) {
      setPostUserDataError(error.message);
    }
  }, [search]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const response = await apiSettings.fetchForecast(search);
      response.forecasts.locations.length = 5;
      if (!_.isEqual(forecasts, response.forecasts.locations)) {
        postSearchValue();
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [postSearchValue, forecasts, search]);

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
