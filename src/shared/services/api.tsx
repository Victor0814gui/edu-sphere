import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
})



api.interceptors.request.use(
  (config) => {
    console.log(config)
    // Faz alguma coisa antes da requisição ser enviada
    return config;
  },
  (error) => {
    // Faz alguma coisa com o erro da requisição
    console.log(error)
  }
);

// Adiciona um interceptador na resposta
api.interceptors.response.use(
  (config) => {
    console.log(config)
    // Faz alguma coisa antes da requisição ser enviada
    return config;
  },
  (error) => {
    // Faz alguma coisa com o erro da requisição
    console.log(error)
  },
);



export { api };