import "reflect-metadata";
import cors from "cors";
import express from "express"
import "express-async-errors";
import { captureErrorsMiddlewrare } from "../middlewares/app-error-middlewrare";
import { routes } from "./routes";
import http from "http";
import { Server, Socket } from "socket.io";
import { manager } from "./socket/manager";



const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(routes);


app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Route does not exits',
  });
});


const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
  console.log(socket.id);
  manager(io, socket);
});



export {
  httpServer
}