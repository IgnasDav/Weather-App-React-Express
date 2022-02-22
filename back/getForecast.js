"use strict";
import fetch from "node-fetch";
import { API_KEY } from "./config.js";

const getForecast = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await fetch(
      `https://foreca-weather.p.rapidapi.com/forecast/daily/${id}?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      }
    );
    let forecast = await response.json();
    res.send({ success: true, forecast });
    return;
  } catch (e) {
    res.status(500).send({ success: false, error: "Internal Server Error" });
    return;
  }
};
export default getForecast;
