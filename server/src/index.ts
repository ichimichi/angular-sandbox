import express, { Request, Response } from 'express';
import { data, Habit } from './data';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;
const address = `http://localhost:${port}`;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Express dand TS Node server!');
});

app.get('/api/habits', (req: Request, res: Response) => {
  res.send(data.habits);
});

app.post('/api/habits', (req: Request, res: Response) => {
  let habit: Habit = req.body;
  habit.id = data.habits.length + 1;
  habit.count = 0;
  data.habits.push(habit);
  res.send(habit);
});

app
  .listen(port, () => {
    return console.log(`server is listening on ${port} : ${address}`);
  })
  .on('error', (err: Error) => {
    return console.error(err);
  });
