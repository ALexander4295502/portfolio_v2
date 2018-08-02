import uuidV4 from "uuid/v4";

class SessionManager {
  static createSession = () => {
    if (!sessionStorage.getItem("session")) {
      sessionStorage.setItem("session", uuidV4());
    }
  };

  static getSession = () => {
    if (sessionStorage.getItem("session")) {
      return sessionStorage.getItem("session");
    } else {
      console.info("Session empty or expired, create a new one");
      this.createSession();
      return sessionStorage.getItem("session");
    }
  };
}

export default SessionManager;
