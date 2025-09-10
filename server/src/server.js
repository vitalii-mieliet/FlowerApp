import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import getEnvVar from './utils/getEnvVar.js';
import router from './routers/index.js';

const PORT = Number(getEnvVar('PORT', '3000'));

const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(router);

  app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
  });
};

export default setupServer;
