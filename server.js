import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import subscribersRouter from './routes/subscribers.js';

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('database connected'));

app.use(express.json());

app.use('/subscribers', subscribersRouter);

app.listen(3000, () => console.log('server running'));