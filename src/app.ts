import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import router from './router';
import connect from './database/database';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

export const init = async () => {
  await connect();
};

export default app;
