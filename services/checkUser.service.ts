import { IUserData } from "../interfaces/IUserData.interface";
import jwt from 'jsonwebtoken';
import { JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv';
import { decode } from "punycode";

dotenv.config();



const checkUserService = (token: string): IUserData | any => {
    try {
        const user = checkPermission(token);
        return user;
    }
    catch (error: any) {
        return {error: error.message};
    }
}


function checkPermission(token: string): IUserData {
    const decodedToken: JwtPayload|string = jwt.verify(token, process.env.JWT_SECRET!);
    
    if(typeof decodedToken === 'string') {
      throw new Error('Token inválido!');
    }

    const {userId, username, role} = decodedToken as JwtPayload;
  
    if (role !== 'superUser') {
      throw new Error('Usuário não tem permissão para acessar este recurso do sistema!');
    }
  
    return { userId: userId, username: username, role: role };
  }

export {checkUserService}