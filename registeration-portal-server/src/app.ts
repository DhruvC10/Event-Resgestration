import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// Routes
app.use('/ticket', routes.ticketRoutes);

// Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env['CLIENT_BASE_URL'],
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);

app.get('/', (req, res) => {
  res.send('hello from ts-app');
});

export default app;
