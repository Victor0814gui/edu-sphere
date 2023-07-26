import "reflect-metadata";

import express from "express"
import 'express-async-errors';
import { captureErrorsMiddlewrare } from "../middlewares/app-error-middlewrare";
import { routes } from "./routes";
import "@user/infra/injection"
import http from "http";

const app = express();
const serverHttp = http.createServer(app);


app.use(express.json());
app.use(routes);


app.use((req, res, next) => {
  res.status(404).send("route not found");
});


app.use(captureErrorsMiddlewrare);

export {
  serverHttp
}