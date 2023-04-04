import axios from "axios"

const GptService = axios.create({
  baseURL: process.env.URL || "https://gpt-beckend.herokuapp.com"
});

export default GptService;