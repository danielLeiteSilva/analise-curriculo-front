import axios from "axios"

const GptService = axios.create({
  baseURL: process.env.URL || "http://localhost:8080"
});

export default GptService;