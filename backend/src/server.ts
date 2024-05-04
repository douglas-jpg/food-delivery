import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

// dotenv
config();

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(`API working on the port ${port}`);
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
