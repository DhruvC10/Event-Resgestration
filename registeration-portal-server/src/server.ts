import app from './app';
import { connectDB } from './config/database';

// DB connect
connectDB();

const PORT = process.env['PORT'] || 8080;

app.listen(PORT, () => {
  console.log(`Listening at PORT: ${PORT}`);
});
