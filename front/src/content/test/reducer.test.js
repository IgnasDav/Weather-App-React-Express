import reducer from "../reducer";
import * as types from "../types";
const state = {
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
describe("Content reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });
  it("should set forecast loading to true", () => {
    const successLoading = {
      type: types.SET_FORECASTS,
      payload: true,
    };
    expect(reducer(state, successLoading)).toEqual({
      forecasts: {
        list: [],
        loading: true,
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
    });
  });
  it("should set forecast data to be an array with values", () => {
    const successData = {
      type: types.SET_FORECASTS_SUCCESS,
      payload: [
        {
          foo: "bar",
        },
      ],
    };
    expect(reducer(state, successData)).toEqual({
      forecasts: {
        list: [
          {
            foo: "bar",
          },
        ],
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
    });
  });
  it("should set forecast error to be an error with a value of something", () => {
    const successError = {
      type: types.SET_FORECASTS_ERROR,
      payload: "This is unmistakably a mistake",
    };
    expect(reducer(state, successError)).toEqual({
      forecasts: {
        list: [],
        loading: false,
        error: "This is unmistakably a mistake",
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
    });
  });
  it("should set search error to be an error with a value of something", () => {
    const successError = {
      type: types.SET_SEARCH_ERROR,
      payload: "This is unmistakably a mistake",
    };
    expect(reducer(state, successError)).toEqual({
      forecasts: {
        list: [],
        loading: false,
        error: null,
      },
      search: {
        data: "",
        error: "This is unmistakably a mistake",
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
    });
  });
  it("should set search value to be a value of something", () => {
    const successData = {
      type: types.SET_SEARCH_SUCCESS,
      payload: "This is the best bestest value",
    };
    expect(reducer(state, successData)).toEqual({
      forecasts: {
        list: [],
        loading: false,
        error: null,
      },
      search: {
        data: "This is the best bestest value",
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
    });
  });
  it("should set location value to be an array of something", () => {
    const successData = {
      type: types.SET_LOCATION_SUCCESS,
      payload: [{ location: "FooBar" }],
    };
    expect(reducer(state, successData)).toEqual({
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
        data: [{ location: "FooBar" }],
        error: null,
        loading: false,
      },
      singleForecast: {
        data: [],
        error: null,
        loading: false,
      },
    });
  });
  it("should set location loading to be true", () => {
    const successLoading = {
      type: types.SET_LOCATION,
      payload: true,
    };
    expect(reducer(state, successLoading)).toEqual({
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
        loading: true,
      },
      singleForecast: {
        data: [],
        error: null,
        loading: false,
      },
    });
  });
  it("should set location error to be a value of something", () => {
    const successError = {
      type: types.SET_LOCATION_ERROR,
      payload: "Oops this is a mistake",
    };
    expect(reducer(state, successError)).toEqual({
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
        error: "Oops this is a mistake",
        loading: false,
      },
      singleForecast: {
        data: [],
        error: null,
        loading: false,
      },
    });
  });
  it("should set singleForecast value to be an array of something", () => {
    const successData = {
      type: types.SET_SINGLEFORECAST_SUCCESS,
      payload: [{ forecast: "FooBar" }],
    };
    expect(reducer(state, successData)).toEqual({
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
        data: [{ forecast: "FooBar" }],
        error: null,
        loading: false,
      },
    });
  });
  it("should set singleForecast loading to be true", () => {
    const successLoading = {
      type: types.SET_SINGLEFORECAST,
      payload: true,
    };
    expect(reducer(state, successLoading)).toEqual({
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
        loading: true,
      },
    });
  });
  it("should set singleForecast error to be a value of something", () => {
    const successError = {
      type: types.SET_SINGLEFORECAST_ERROR,
      payload: "Oops this is a mistake",
    };
    expect(reducer(state, successError)).toEqual({
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
        error: "Oops this is a mistake",
        loading: false,
      },
    });
  });
});
