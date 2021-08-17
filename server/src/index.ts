import express, { Request, Response } from 'express';
import { data } from './data';
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

app.get('/api/habits', (req, res) => {
  res.send(data.habits);
});

app
  .listen(port, () => {
    return console.log(`server is listening on ${port} : ${address}`);
  })
  .on('error', (err: Error) => {
    return console.error(err);
  });
