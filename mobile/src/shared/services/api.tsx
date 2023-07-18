import axios, { AxiosError } from "axios";

const baseUrl = "http://localhost:5000";
const api = axios.create({
  baseURL: baseUrl,
})



// api.interceptors.request.use(
//   (config) => {
//     console.log(config)
//     // Faz alguma coisa antes da requisição ser enviada
//     return config;
//   },
//   (error) => {
//     // Faz alguma coisa com o erro da requisição
//     console.log("interceptor request",error)
//   }
// );

// // Adiciona um interceptador na resposta
// api.interceptors.response.use(
//   (config) => {

//     return config;
//   },
//   (error) => {
//       // Faz alguma coisa com o erro da requisição
//     console.log("interceptor response",error)
//   },
// );



export { api, baseUrl };