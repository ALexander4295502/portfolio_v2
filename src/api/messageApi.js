import axios from "axios";
import momentTimezone from "moment-timezone";

import { isDev } from "../helper/settings";
import SessionManager from "../helper/session";

const messageApi = axios.create({
  baseURL: isDev() ? "http://localhost:4000" : "https://bot.zheng.town",
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
