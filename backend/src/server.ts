import "dotenv";
import express from "express"

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json())

app.get("/", (request, response) => {
  return response.json({
    message: "ok"
  })
})


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})