import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express"
import "express-async-errors";
import { captureErrorsMiddlewrare } from "../middlewares/app-error-middlewrare";
import { routes } from "./routes";
import http from "http";
import { Server, Socket } from "socket.io";
import { manager } from "./socket/manager";
import { container } from "tsyringe";
import { WebhookListenerStripeController } from "@/src/modules/purchases/infra/http/controller/webhooks-listener-stripe-controller";



const app = express();
const httpServer = http.createServer(app);

app.use(cors());

app.use((req, res, next) => {
  if (req.originalUrl === '/purchases/webhooks') {
    next(); // Do nothing with the body because I need it in a raw state.
  } else {
    express.json()(req, res, next);  // ONLY do express.json() if the received request is NOT a WebHook from Stripe.
  }
});

 

// app.use(express.json({
//   type: 'application/json',
// }));

 

app.use(routes);


app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Route does not exits',
  });
});


const io = new Server(httpServer,{
  cors:{
    origin:"*"
  }
});

io.on("connection", (socket: Socket) => {
  socket.on("message",(data: any) => {
    console.log(data)
  })
  console.log(socket.id);
  manager(io, socket);
});



export {
  httpServer
}