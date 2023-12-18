import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/Modules/Student/student.route';
const app: Application = express();

// Parser:
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', getAController);

export default app;
