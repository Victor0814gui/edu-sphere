import "reflect-metadata";
import cors from "cors";
import express from "express"
import 'express-async-errors';
import { captureErrorsMiddlewrare } from "../middlewares/app-error-middlewrare";
import { routes } from "./routes";
import http from "http";



const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(routes);


app.use((req, res, next) => {
  res.status(404).send("route not found");
});


app.use(captureErrorsMiddlewrare);

export {
  httpServer
}