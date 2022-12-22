import express, { json } from 'express';
import cors from 'cors';
import { connectToDB } from './db/server.js';
import indexRoute from './routes/index.routes.js';

export const app = express(); // Create our Express Application Object

const PORT = process.env.PORT || 3000;
const BASE_URL = '/api/v1';
app.use(cors());
app.use(json());
app.use(BASE_URL, indexRoute); // /api/v1

//run the function so we are connected to the database
connectToDB();
// Server Listener
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
