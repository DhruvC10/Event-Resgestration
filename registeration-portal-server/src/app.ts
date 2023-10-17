import express from 'express';
import routes from './routes';

const app = express();

// Routes
app.use('/ticket', routes.ticketRoutes);

app.get('/', (req, res) => {
  res.send('hello from ts-app');
});

export default app;
