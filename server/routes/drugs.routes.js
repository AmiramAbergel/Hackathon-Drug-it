import { Router } from 'express';
import { addNewDrug, getAllDrugs } from '../controllers/drugs.controller.js';

export const drugsRouter = Router();

drugsRouter.route(`/`).get(getAllDrugs).post(addNewDrug); //get all drugs and add new drug
