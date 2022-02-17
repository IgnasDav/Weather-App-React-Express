import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import content from "../../content";
import apiSettings from "../../API";
//Components
import { Spinner } from "../Spinner/Spinner.styles";
import ForecastInfoCard from "../ForecastInfoCard";
//Styles
import { Wrapper, Content } from "./ForecastInfo.styles";

const ForecastInfo = () => {
  const [postError, setPostError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useSelector((state) =>
    content.selectors.selectLocation(state)
  );
  const locationError = useSelector((state) =>
    content.selectors.selectLocationError(state)
  );
  const locationLoading = useSelector((state) =>
    content.selectors.selectLocationLoading(state)
  );
  const forecast = useSelector((state) =>
    content.selectors.selectSingleForecast(state)
  );
  const error = useSelector((state) =>
    content.selectors.selectSingleForecastError(state)
  );
  const loading = useSelector((state) =>
    content.selectors.selectSingleForecastLoading(state)
  );
  useEffect(() => {
    dispatch(content.actions.setLocation(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(content.actions.setSingleForecast(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(content.actions.deleteSingleForecast());
      dispatch(content.actions.deleteLocation());
    };
  }, [dispatch]);

  const postUserWeatherData = useCallback(async () => {
    try {
      const response = await apiSettings.postUserForecastData({
        data: forecast[0],
      });
      return await response.json();
    } catch (e) {
      setPostError(e.message);
    }
  }, [forecast]);
  //Had to implement here a timeout which sends the post data to the server
  //Because one of the side effect causes component to render 2 times so 2 instances off the same data geet sent
  //But this can be an incorrect way of sending the data because, user may click out of the page before one seccond passes
  useEffect(() => {
    const timeout = setTimeout(() => {
      postUserWeatherData();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [postUserWeatherData]);

  return (
    <Wrapper>
      <Content>
        {error && <h1>{error.message}</h1>}
        {locationError && <h1>{locationError.message}</h1>}
        {(loading || locationLoading) && <Spinner />}
        {!loading &&
          !error &&
          !locationLoading &&
          !locationError &&
          forecast.length && (
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
