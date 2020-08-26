import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/conversationapp/",
  headers: { "content-type": "application/json" },
});