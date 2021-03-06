import 'reflect-metadata';
import './setup';
import express from 'express';
import cors from 'cors';
import router from './router';
import connect from './database/database';
import HandleErrors from './middlewares/HandleErrors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(HandleErrors);

export const init = async () => {
  await connect();
};

export default app;
