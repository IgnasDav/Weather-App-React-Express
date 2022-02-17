const apiSettings = {
  fetchForecast: async (search) => {
    const response = await fetch(
      `http://localhost:3000/getForecasts/${search}`
    );
    return await response.json();
  },
  fetch7DayForecast: async (id) => {
    const response = await fetch(`http://localhost:3000/get7DayForecast/${id}`);
    return await response.json();
  },
  getLocation: async (id) => {
    const response = await fetch(`http://localhost:3000/getLocation/${id}`);
    return await response.json();
  },
  postUserSearchParam: async (search) => {
    const response = await fetch("http://localhost:3000/postSearchParams", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ search }),
    });
    return await response.json();
  },
  postUserForecastData: async (forecast) => {
    const response = await fetch("http://localhost:3000/postData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ forecast }),
    });
    return await response.json();
  },
};
export default apiSettings;
