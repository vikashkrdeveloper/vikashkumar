import express from 'express';
import bodyParser from "body-parser";
import cookiesParser from "cookies-parser";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;



app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.get('*', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});