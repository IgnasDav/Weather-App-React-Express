import * as types from "./types";
import { createReducer } from "@reduxjs/toolkit";
const DEFAULT_STATE = {
  forecasts: {
    list: [],
    loading: false,
    error: null,
  },
  search: {
    data: "",
    error: null,
  },
  location: {
    data: [],
    error: null,
    loading: false,
  },
  singleForecast: {
    data: [],
    error: null,
    loading: false,
  },
};

const contentReducer = createReducer(DEFAULT_STATE, (builder) => {
  builder
    .addCase(types.SET_FORECASTS, (state, action) => {
      state.forecasts.loading = action.payload;
    })
    .addCase(types.SET_FORECASTS_SUCCESS, (state, action) => {
      state.forecasts.list = action.payload;
    })
    .addCase(types.SET_FORECASTS_ERROR, (state, action) => {
      state.forecasts.error = action.payload;
    })
    .addCase(types.DELETE_FORECASTS, (state, action) => {
      state.forecasts.list = [];
    })
    .addCase(types.SET_LOCATION, (state, action) => {
      state.location.loading = action.payload;
    })
    .addCase(types.SET_LOCATION_ERROR, (state, action) => {
      state.location.error = action.payload;
    })
    .addCase(types.SET_LOCATION_SUCCESS, (state, action) => {
      state.location.data = action.payload;
    })
    .addCase(types.DELETE_LOCATION, (state, action) => {
      state.location.data = [];
    })
    .addCase(types.SET_SEARCH_ERROR, (state, action) => {
      state.search.error = action.payload;
    })
    .addCase(types.SET_SEARCH_SUCCESS, (state, action) => {
      state.search.data = action.payload;
    })
    .addCase(types.DELETE_SEARCH_ERROR, (state, action) => {
      state.search.error = null;
    })
    .addCase(types.SET_SINGLEFORECAST, (state, action) => {
      state.singleForecast.loading = action.payload;
    })
    .addCase(types.SET_SINGLEFORECAST_ERROR, (state, action) => {
      state.singleForecast.error = action.payload;
    })
    .addCase(types.SET_SINGLEFORECAST_SUCCESS, (state, action) => {
      state.singleForecast.data = action.payload;
    })
    .addCase(types.DELETE_SINGLEFORECAST, (state, action) => {
      state.singleForecast.data = [];
    })
    .addDefaultCase((state, action) => {});
});

export default contentReducer;
