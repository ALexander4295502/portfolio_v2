import axios from "axios";
import momentTimezone from "moment-timezone";

import SessionManager from "../helper/session";

const messageApi = axios.create({
  baseURL: "https://bot.zheng.town",
  timeout: 1000,
  headers: {
    "Content-type": "application/json"
  }
});

export function sendMessage(content) {
  return messageApi.post("", {
    content: content,
    timezone: momentTimezone.tz.guess(),
    session: SessionManager.getSession()
  });
}
