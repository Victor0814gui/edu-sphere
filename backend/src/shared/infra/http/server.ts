import "dotenv";
import "reflect-metadata";
import express from "express"

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())

app.get("/", (request, response) => {
  const content = {
    messsage: "123-4-asdf-4-asdasdasd-4-234",
    name: "kjaçslkdjçlfkadf",
  }
  return response.json(content);
})


app.get("/asdf", (request, response) => {
  return response.json({
    message: "2345-1234-1234asdfasdf"
  });
})

const log = () => {
  console.log(`✅server running on port ${PORT}`)
}

app.listen(PORT, log);