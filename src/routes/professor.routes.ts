import { Router } from 'express';
import ProfessorController from '../controllers/ProfessorController';

const professorRouter = Router();

professorRouter.get('/', ProfessorController.find);

export default professorRouter;
