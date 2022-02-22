"use strict";
import cors from "cors";
import express, { response } from "express";
import { PORT } from "./config.js";
//Functions
import getSearch from "./getSearch.js";
import getLocation from "./getLocation.js";
import getForecast from "./getForecast.js";
import { postData, postSearchParams } from "./post.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/getForecasts/:search", getSearch);
app.get("/getLocation/:locationId", getLocation);
app.get("/get7DayForecast/:id", getForecast);
app.post("/postData", postData);
app.post("/postSearchParams", postSearchParams);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
