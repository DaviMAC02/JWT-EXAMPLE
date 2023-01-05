import express from 'express';
import { createToken } from '../services/authToken.service';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(createToken({userId: req.body.userId, username: req.body.username, role: req.body.role}));
});

export {router as authTokenRouter};