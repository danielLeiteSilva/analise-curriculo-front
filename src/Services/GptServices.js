import axios from "axios"

const GptService = axios.create({
  baseURL: process.env.API_URL
});

export default GptService;
