"use strict";
import fetch from "node-fetch";
import { API_KEY } from "./config.js";

const getSearch = async (req, res) => {
  try {
    const search = req.params.search;
    const response = await fetch(
      `https://foreca-weather.p.rapidapi.com/location/search/${search}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      }
    );
    const forecasts = await response.json();
    res.send({ success: true, forecasts });
    console.log(search);
    return;
  } catch (e) {
    res.status(500).send({ success: false, error: "Internal Server Error" });
    return;
  }
};
export default getSearch;
