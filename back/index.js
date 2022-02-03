"use strict";
import { MongoClient } from "mongodb";
import cors from "cors";
import express, { response } from "express";
import dotenv from "dotenv";
import joi from "joi";
import fetch from "node-fetch";

dotenv.config();

export const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
export const PORT = process.env.PORT;
export const API_KEY = process.env.API_KEY;

const client = new MongoClient(MONGO_CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/getForecasts/:search", async (req, res) => {
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
});
app.get("/getLocation/:locationId", async (req, res) => {
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
});
app.get("/get7DayForecast/:id", async (req, res) => {
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
});
app.post("/postData", async (req, res) => {
  try {
    const connection = await client.connect();
    const date = Date.now();
    const { forecast } = req.body;
    const data = { forecast, date };
    const schema = joi.object({
      forecast: joi.object().required(),
      date: joi.required(),
    });
    const isValid = schema.validate(data);
    console.log(forecast);
    if (isValid.error) {
      res
        .status(400)
        .send({ success: false, error: isValid.error.details[0].message });
      return;
    } else {
      const userData = connection
        .db("UserData")
        .collection("user weather data")
        .insertOne(data);
      res.send({ success: true, data });
      console.log(data);
      return;
    }
  } catch (e) {
    res.status(500).send({ success: false, error: "Internal Server Error" });
    return;
  }
});
app.post("/postSearchParams", async (req, res) => {
  try {
    const { search } = req.body;
    const connection = await client.connect();
    if (!search) {
      res.send({
        success: false,
        error: "Search input empty",
      });
    } else {
      const newSearchData = { search };
      const schema = joi.object({
        search: joi.string().max(30).required(),
      });
      const isValid = schema.validate(newSearchData);
      if (isValid.error) {
        res
          .status(400)
          .send({ success: false, error: isValid.error.details[0].message });
        return;
      } else {
        console.log(search);
        const searchData = connection
          .db("UserData")
          .collection("search params")
          .insertOne(newSearchData);
        res.send({ success: true, data: newSearchData });
        return;
      }
    }
  } catch (e) {
    res.status(500).send({ success: false, error: "Internal server error" });
    return;
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
