import { Router } from 'express';
import ExamController from '../controllers/ExamController';

const examRouter = Router();

examRouter.post('/', ExamController.create);
examRouter.get('/', ExamController.find);

export default examRouter;
