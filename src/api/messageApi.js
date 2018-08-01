import axios from "axios";
import { isDev } from "../helper/settings";

const messageApi = axios.create({
  baseURL: isDev() ? "localhost:4000" : "localhost:4000",
  timeout: 1000,
  headers: {
    "Content-type": "application/json"
  }
});

export function sendMessage(content) {
  messageApi
    .post("/", {
      content: content
    })
    .then(response => {
      console.log("RESPONSE: ", response);
    })
    .catch(err => {
      console.error("ERR: ", err);
    });
}
