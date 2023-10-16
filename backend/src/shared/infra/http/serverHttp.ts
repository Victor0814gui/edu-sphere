
const PORT = process.env.PORT || 5000;
import { httpServer } from "./server";


function startServer() {

  const log = () => {
    console.log(`✅Server started with worker ${process.pid}`)
  }

  httpServer.listen(PORT, log);
}

export {
  startServer
}