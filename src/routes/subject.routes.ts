import { Router } from 'express';
import SubjectController from '../controllers/SubjectController';

const subjectRouter = Router();

subjectRouter.get('/', SubjectController.find);

export default subjectRouter;
