const express = require("express");
const message = require("../routes/conversationRoutes");
const conversation = require("../routes/messageRoutes");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

module.exports = function (app) {
  // Morgan send many informations of the request status in a dev environment.
  process.env.NODE_ENV == "development" &&  app.use(morgan("tiny"));
  // Only parse JSON incoming requests.
  app.use(express.json());
  // Get the cookie parser.
  app.use(cookieParser());
  // Accept cors request.
  app.use(cors({ origin: "http://localhost:3000", credentials: true }));
  // Secure Express apps by setting various HTTP headers.
  app.use(helmet());
  // Message routes.
  app.use("/conversationapp/message", message);
  // Conversation routes.
  app.use("/conversationapp/conversation", conversation);
};
