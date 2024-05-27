import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';
import route from './route';

function bootstap() {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use('/crud/v1', route);

  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof Error) {
        return response.status(400).json({
          message: err.message,
        });
      }
      return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err}`,
      });
    },
  );

  app.listen(8080, () => {
    console.log('App started 8080 port.');
  });
}

bootstap();
