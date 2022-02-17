import { createSelector } from "@reduxjs/toolkit";

export const selectForecasts = (state) => state.content.forecasts.list;
export const selectMemoizedForecasts = createSelector(
  selectForecasts,
  (forecasts) => forecasts.map((forecast) => forecast)
);
export const selectForecastsLoading = (state) =>
  state.content.forecasts.loading;
export const selectForecastsError = (state) => state.content.forecasts.error;
export const selectSearch = (state) => state.content.search.data;
export const selectSearchError = (state) => state.content.search.error;
export const selectLocation = (state) => state.content.location.data;
export const selectLocationError = (state) => state.content.location.error;
export const selectLocationLoading = (state) => state.content.location.loading;
export const selectSingleForecast = (state) =>
  state.content.singleForecast.data;
export const selectSingleForecastError = (state) =>
  state.content.singleForecast.error;
export const selectSingleForecastLoading = (state) =>
  state.content.singleForecast.loading;
