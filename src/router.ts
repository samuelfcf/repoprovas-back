import { Response, Router } from 'express';
import subjectRouter from './routes/subject.routes';
import professorRouter from './routes/professor.routes';
import examRouter from './routes/exam.routes';

const router = Router();

router.get('/', async (_, res: Response) => {
  res.status(200).send({
    message: 'server is ok!'
  });
});

router.use('/subjects', subjectRouter);
router.use('/professors', professorRouter);
router.use('/exams', examRouter);

export default router;
