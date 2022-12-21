import express, { json } from 'express';
import { connectToDB } from './db/server.js';
import indexRoute from './routes/index.route.js';

const app = express(); // Create our Express Application Object

const PORT = process.env.PORT || 3000;
const BASE_URL = '/api/v1';

app.use(json());
app.use(BASE_URL, indexRoute); // localhost:4000/api/v1

//run the function so we are connected to the database
connectToDB();
// Server Listener
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));
