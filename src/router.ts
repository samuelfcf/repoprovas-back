import { Response, Router } from 'express';

const router = Router();

router.get('/', async (_, res: Response) => {
  res.status(200).send({
    message: 'server is ok!'
  });
});

export default router;
