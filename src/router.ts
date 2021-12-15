import { Response, Router } from 'express';
import subjectRouter from './routes/subject.routes';

const router = Router();

router.get('/', async (_, res: Response) => {
  res.status(200).send({
    message: 'server is ok!'
  });
});

router.use('/subjects', subjectRouter);

export default router;
