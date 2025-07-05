import express from "express"; // para conectar con el servidor
import morgan from "morgan"; //monitorear solicitudes http
import cors from 'cors';
import routerUsers from "./routers/routerUsers.js";
import routerLogins from "./routers/routerLogins.js";
import routerProducs from "./routers/routerProducts.js";

const servidor = express();
servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use('/users', routerUsers);
servidor.use('/inicioSesion', routerLogins);
servidor.use('/products', routerProducts);

servidor.get('/', (sol, res)=>{
    res.status(404).send("No encontrado");
});

export default servidor;