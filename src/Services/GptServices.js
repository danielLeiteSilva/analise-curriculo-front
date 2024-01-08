import axios from "axios"

const GptService = axios.create({
  baseURL: 'https://api-curriculo-chatgpt.vercel.app'
});

GptService.defaults.timeout = 20000;

export default GptService;
