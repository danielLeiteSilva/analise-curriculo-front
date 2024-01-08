import axios from "axios"

const GptService = axios.create({
  baseURL: 'https://api-curriculo-chatgpt.vercel.app'
});

export default GptService;
