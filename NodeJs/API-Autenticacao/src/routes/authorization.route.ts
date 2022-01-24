import { Router, Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-autheticantion.middleware";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";

const authorizationRoute = Router();


authorizationRoute.post('/token', basicAuthenticationMiddleware ,async (req: Request, res: Response, next: NextFunction) =>{
    try{      
        const user = req.user;
        
        if(!user) {
            throw new ForbiddenError('Usuario não informado!');
        }
        const jwtPayload = { username: user.username };
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_secret_key';
        
        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
        res.status(StatusCodes.OK).json({ token: jwt});
        
    } catch (error){
        next(error);
    }   
});

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});


export default authorizationRoute;

// Anotações

/*  "iss" O dominio da aplicacao geradora do token
    "sub" É o assunto do token, mas é muito utilizado para guardar o ID do usuario
    "aud" Define quem poder usar o token
    "exp" Data para expiracao do token
    "nbf" Define uma data para qual o token não pode ser aceito antes dela
    "iat" Data de criação do token
    "jti" o id do token
*/