import dotenv from "dotenv";

dotenv.config();

export const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
export const PORT = process.env.PORT;
export const API_KEY = process.env.API_KEY;
