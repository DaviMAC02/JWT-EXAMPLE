import express from 'express';
import { checkUserService } from '../services/checkUser.service';
import { IUserData } from '../interfaces/IUserData.interface';

const router = express.Router();


router.get('/', (req, res) => {
    res.send(checkUserService(req.body.token));
});

export {router as checkUserRouter}