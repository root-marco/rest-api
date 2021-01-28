// MODULES
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// MONGOOSE
mongoose.connect(process.env.DATABASE_URL, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected'));

// LISTEN
app.listen(PORT, () => console.log('server running'));