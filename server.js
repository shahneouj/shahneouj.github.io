import Express from "express";
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import usersRoutes from "./router/user.js";
const app = Express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// parse application/json;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Routing;
app.use('/user', usersRoutes);
//listen to port;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))