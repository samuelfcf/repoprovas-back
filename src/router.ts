import { Response, Router } from 'express';

const router = Router();

router.get('/lala', async (_, res: Response) => {
  res.status(200).send({
    message: 'server is ok!'
  });
});

export default router;
