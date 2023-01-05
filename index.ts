import express from 'express';
import dotenv from 'dotenv';
import {checkUserRouter} from './routes/checkUser.route';
import {authTokenRouter} from './routes/authToken.route';


dotenv.config();
const app = express();

app.use(express.json());
app.use('/auth', authTokenRouter)
app.use('/checkUser', checkUserRouter)


const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

