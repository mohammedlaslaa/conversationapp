const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const conversationSchema = new mongoose.Schema({
  conversationId: {
    type: Number,
    default: 1,
  },

  title: {
    type: String,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },

  date_create: {
    type: Date,
    default: Date.now(),
  },

  date_update: {
    type: Date,
    default: Date.now(),
  },

  date_delete: {
    type: Date,
    default: null,
  },

  isActive: {
    type: Boolean,
    default: true,
  },

  isClosed: {
    type: Boolean,
    default: false,
  },

  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
});

// Note that the fields send in the request that are not in this JOI Object will automatically throw a rejected request.

// Validator with the required fields.

const schemaValidationConversation = Joi.object({
  title: Joi.string()
    .pattern(new RegExp(/[\w\d\séùàüäîçïèêôö]*$/))
    .min(3)
    .max(30),

  isActive: Joi.boolean(),
});

// Validator put with the required fields.

const schemaPutValidationConversation = Joi.object({
  title: Joi.string()
    .pattern(new RegExp(/[\w\d\séùàüäîçïèêôö]*$/))
    .min(3)
    .max(30),

  isActive: Joi.boolean(),

  isClosed: Joi.boolean(),
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports.Conversation = Conversation;
module.exports.schemaValidationConversation = schemaValidationConversation;
module.exports.schemaPutValidationConversation = schemaPutValidationConversation;
