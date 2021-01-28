import subscribersRouter from './routes/subscribers.js';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected'));

app.use('subscribers', subscribersRouter);

app.use(express.json());

app.listen(PORT, () => console.log('server running'));