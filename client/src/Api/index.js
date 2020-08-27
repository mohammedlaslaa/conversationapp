import axios from "./Axios";

class Api {
  static ApiRequest(method, endPoint, data = {}, options = {}) {
    const url = `/${endPoint}`;
    return axios({ method, url, data, ...options });
  }

  static getAllConversations() {
    return this.ApiRequest("get", "conversation");
  }

  static getConversationById(id) {
    return this.ApiRequest("get", `conversation/detail/${id}`);
  }

  static addNewConversation() {
    return this.ApiRequest("post", "conversation");
  }

  static closeConversation(id) {
    return this.ApiRequest("put", `conversation/${id}`, { isClosed: true });
  }

  static sendMessage(fkConversation, text) {
    const objData = {
      fkConversation,
      text,
    };
    return this.ApiRequest("post", "message", objData);
  }
}

export default Api;
