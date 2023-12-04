import Axios from "axios";


const baseURL = "http://localhost:5000"

const network = Axios.create({
  baseURL,
})

export {
  baseURL,
  network,
}