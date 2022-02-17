import * as selectors from "../selectors";
const state = {
  content: {
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
  },
};

describe("Content module selectors", () => {
  it("returns an empty array for forecasts state when no forecasts are in the list", () => {
    expect(selectors.selectForecasts(state)).toStrictEqual([]);
  });
  it("returns error null for forecasts state when no error is provided", () => {
    expect(selectors.selectForecastsError(state)).toStrictEqual(null);
  });
  it("returns loading false for forecasts state when loading isn't set to true", () => {
    expect(selectors.selectForecastsLoading(state)).toStrictEqual(false);
  });
  it("returns an array with items when some items are provided for forecast", () => {
    state.content.forecasts.list = [{ city: "foo", weather: "bar" }];
    expect(selectors.selectForecasts(state)).toStrictEqual([
      { city: "foo", weather: "bar" },
    ]);
  });
  it("returns error if error is provided in forecasts state", () => {
    state.content.forecasts.error = "Totally random error message";
    expect(selectors.selectForecastsError(state)).toStrictEqual(
      "Totally random error message"
    );
  });
  it("returns loading true if it is provided in forecasts state", () => {
    state.content.forecasts.loading = true;
    expect(selectors.selectForecastsLoading(state)).toStrictEqual(true);
  });
  it("returns an empty search value for search state when no search value is provided", () => {
    expect(selectors.selectSearch(state)).toStrictEqual("");
  });
  it("returns error null for search state when no error is provided", () => {
    expect(selectors.selectSearchError(state)).toStrictEqual(null);
  });
  it("returns search value for search state when search is provided", () => {
    state.content.search.data = "FooBar";
    expect(selectors.selectSearch(state)).toStrictEqual("FooBar");
  });
  it("returns an error when provided for search state", () => {
    state.content.search.error = "random error";
    expect(selectors.selectSearchError(state)).toStrictEqual("random error");
  });
  it("returns an empty array for location state when no location is in the list", () => {
    expect(selectors.selectLocation(state)).toStrictEqual([]);
  });
  it("returns error null for location state when no error is provided", () => {
    expect(selectors.selectLocationError(state)).toStrictEqual(null);
  });
  it("returns loading false for location state when loading isn't set to true", () => {
    expect(selectors.selectLocationLoading(state)).toStrictEqual(false);
  });
  it("returns an array with items when some items are provided for location", () => {
    state.content.location.data = [{ city: "foo", id: "bar" }];
    expect(selectors.selectLocation(state)).toStrictEqual([
      { city: "foo", id: "bar" },
    ]);
  });
  it("returns error if error is provided in location state", () => {
    state.content.location.error = "Totally random error message";
    expect(selectors.selectLocationError(state)).toStrictEqual(
      "Totally random error message"
    );
  });
  it("returns loading true if it is provided in location state", () => {
    state.content.location.loading = true;
    expect(selectors.selectLocationLoading(state)).toStrictEqual(true);
  });
  it("returns an empty array for singleForecast state when no singleForecast is in the list", () => {
    expect(selectors.selectSingleForecast(state)).toStrictEqual([]);
  });
  it("returns error null for singleForecast state when no error is provided", () => {
    expect(selectors.selectSingleForecastError(state)).toStrictEqual(null);
  });
  it("returns loading false for singleForecast state when loading isn't set to true", () => {
    expect(selectors.selectSingleForecastLoading(state)).toStrictEqual(false);
  });
  it("returns an array with items when some items are provided for singleForecast", () => {
    state.content.singleForecast.data = [{ city: "foo", id: "bar" }];
    expect(selectors.selectSingleForecast(state)).toStrictEqual([
      { city: "foo", id: "bar" },
    ]);
  });
  it("returns error if error is provided in singleForecast state", () => {
    state.content.singleForecast.error = "Totally random error message";
    expect(selectors.selectSingleForecastError(state)).toStrictEqual(
      "Totally random error message"
    );
  });
  it("returns loading true if it is provided in singleForecast state", () => {
    state.content.singleForecast.loading = true;
    expect(selectors.selectSingleForecastLoading(state)).toStrictEqual(true);
  });
});
