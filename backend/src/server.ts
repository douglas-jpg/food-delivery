import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectDB } from './config/db';
import { foodRouter } from './routes/foodRoute';

// dotenv
config();

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//api endpoits
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'))

app.get('/', (req, res) => {
    res.send(`API working on the port ${port}`);
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
