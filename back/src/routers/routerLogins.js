import {Router} from  "express";
import controllerLogins from "../controllers/controllerlogins.js";


const routerLogin = Router();

routerLogin.post('/', controllerLogins.iniciarSesion);
routerLogin.get('/token/:token', controllerLogins.validarToken);