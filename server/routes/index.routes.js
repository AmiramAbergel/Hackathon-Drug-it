import { Router } from 'express';
import { drugsRouter } from './drugs.routes.js';
const indexRoute = Router();
indexRoute.use('/drugs', drugsRouter);

export default indexRoute;
