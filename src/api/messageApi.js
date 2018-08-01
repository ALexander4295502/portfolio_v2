import axios from "axios";
import { isDev } from "../helper/settings";

const messageApi = axios.create({
  //FUCK CORS!!!!!
  baseURL: isDev()
    ? "https://nodejs-dialogflow-suctxtwrxc.now.sh"
    : "https://nodejs-dialogflow-suctxtwrxc.now.sh",
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
  }
});

export function sendMessage(content) {
  return messageApi.post("", {
    content: content
  });
}
