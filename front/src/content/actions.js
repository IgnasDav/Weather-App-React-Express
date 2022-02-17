import * as types from "./types";
import apiSettings from "../API";
import _ from "lodash";

export const setForecasts = (search) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.SET_FORECASTS, payload: true });
    const response = await apiSettings.fetchForecast(search);
    console.log(response);
    if (response.success === true) {
      const { forecasts } = response;
      const { locations } = forecasts;
      locations.length = 5;
      const state = getState();
      if (!_.isEqual(locations, state.content.forecasts.list)) {
        dispatch({ type: types.SET_FORECASTS_SUCCESS, payload: locations });
      }
    }
  } catch (error) {
    dispatch({ type: types.SET_FORECASTS_ERROR, payload: error.message });
  }
  dispatch({ type: types.SET_FORECASTS, payload: false });
};
export const deleteForecasts = () => (dispatch, getState) => {
  dispatch({ type: types.DELETE_FORECASTS });
};
export const setLocation = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.SET_LOCATION, payload: true });
    const response = await apiSettings.getLocation(id);
    if (response.success === true) {
      const { location } = response;
      dispatch({ type: types.SET_LOCATION_SUCCESS, payload: location });
    }
  } catch (error) {
    dispatch({ type: types.SET_LOCATION_ERROR, payload: error.message });
  }
  dispatch({ type: types.SET_LOCATION, payload: false });
};
export const setSingleForecast = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.SET_SINGLEFORECAST, payload: true });
    const response = await apiSettings.fetch7DayForecast(id);
    if (response.success === true) {
      const { data } = response;
      data.forecast.length = 5;
      dispatch({
        type: types.SET_SINGLEFORECAST_SUCCESS,
        payload: data.forecast,
      });
    }
  } catch (error) {
    dispatch({ type: types.SET_SINGLEFORECAST_ERROR, payload: error.message });
  }
  dispatch({ type: types.SET_SINGLEFORECAST, payload: false });
};
export const setSearch = (value) => async (dispatch, getState) => {
  const re = /^[a-zA-Z\s]{0,30}$/;
  if (!re.exec(value)) {
    dispatch({ type: types.SET_SEARCH_ERROR, payload: "Invalid input value" });
  } else {
    dispatch({ type: types.DELETE_SEARCH_ERROR });
    dispatch({ type: types.SET_SEARCH_SUCCESS, payload: value });
  }
};
export const deleteSingleForecast = () => (dispatch, _) => {
  dispatch({ type: types.DELETE_SINGLEFORECAST });
};
export const deleteLocation = () => (dispatch, _) => {
  dispatch({ type: types.DELETE_LOCATION });
};
