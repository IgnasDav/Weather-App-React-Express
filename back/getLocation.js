"use strict";
import fetch from "node-fetch";

import { API_KEY } from "./config.js";

const getLocation = async (req, res) => {
  const locationId = req.params.locationId;
  try {
    const response = await fetch(
      `https://foreca-weather.p.rapidapi.com/location/${locationId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "foreca-weather.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      }
    );
    const location = await response.json();
    res.send({ success: true, location });
    return;
  } catch (e) {
    res.status(500).send({ success: false, error: "Internal Server Error" });
    return;
  }
};
export default getLocation;
