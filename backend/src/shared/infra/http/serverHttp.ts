
const PORT = process.env.PORT || 5000;
import { httpServer } from "./server";



const log = () => {
  console.log(`✅server running on port ${PORT}`)
}

httpServer.listen(PORT, log);