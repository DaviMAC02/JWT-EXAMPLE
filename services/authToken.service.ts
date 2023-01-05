import jwt from 'jsonwebtoken';
import { IUserData } from "../interfaces/IUserData.interface";
import dotenv from 'dotenv';

dotenv.config();


export function createToken({userId, username, role}: IUserData): Object {
    return {token: jwt.sign({userId, username, role}, process.env.JWT_SECRET!)};
}