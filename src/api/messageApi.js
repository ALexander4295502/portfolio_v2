import axios from "axios";

const messageApi = axios.create({
  baseURL: 'https://bot.zheng.town',
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
