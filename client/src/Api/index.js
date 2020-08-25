import axios from './Axios';

class Api {
  static ApiRequest(method, endPoint, data = {}, options = {}) {
    const url = `/${endPoint}`;
    return axios({ method, url, data, ...options });
  }

  static getAllConversations() {
    return this.ApiRequest("get", "conversation");
  }

  static addNewConversation() {
    return this.ApiRequest("post", "conversation");
  }
}

export default Api;