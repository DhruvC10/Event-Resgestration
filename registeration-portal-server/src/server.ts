import { config } from 'dotenv';
import { connectDB } from './config/database';

// DB connect
config();
connectDB();

import app from './app';
import preventServerSleep from './utils/preventServerSleep';
const PORT = process.env['PORT'] || 8080;

app.listen(PORT, () => {
  console.log(`Listening at PORT: ${PORT}`);
});

// Create a Job once App is started
preventServerSleep();
