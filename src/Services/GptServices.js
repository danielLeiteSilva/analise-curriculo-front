import axios from "axios"

axios.defaults.timeout = 20000;

const GptService = axios.create({
  baseURL: 'https://api-curriculo-chatgpt.vercel.app'
});

export default GptService;
