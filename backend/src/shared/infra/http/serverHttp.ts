
const PORT = process.env.PORT || 5000;
import { serverHttp } from "./server";



const log = () => {
  console.log(`✅server running on port ${PORT}`)
}

serverHttp.listen(PORT, log);