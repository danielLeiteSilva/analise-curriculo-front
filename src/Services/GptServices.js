import axios from "axios"

const GptService = axios.create({
  baseURL: "http://localhost:8080"
});

export default GptService;