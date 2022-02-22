import { MONGO_CONNECTION_STRING } from "./config.js";
import { MongoClient } from "mongodb";
import joi from "joi";

const client = new MongoClient(MONGO_CONNECTION_STRING);

const postData = async (req, res) => {
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
};

const postSearchParams = async (req, res) => {
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
};

export { postData, postSearchParams };
