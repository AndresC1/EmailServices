import express from 'express';
import emailRoutes from './src/routes/v1/EmailRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// v1
app.use('/api/v1', emailRoutes);

export default app;