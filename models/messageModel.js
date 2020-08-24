const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const messageSchema = new mongoose.Schema({
  FkConversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },

  messageId: {
    type: Number,
    default: 1,
  },

  text: {
    type: String,
    unique: true,
    minlength: 1,
    maxlength: 250,
  },

  date_register: {
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
});

// Note that the fields send in the request that are not in this JOI Object will automatically throw a rejected request.

// Validator with the required fields.

const schemaValidationMessage = Joi.object({
  text: Joi.string()
    .min(1)
    .max(250),

  isActive: Joi.boolean(),
});

// Validator put with the required fields.

const schemaPutValidationMessage = Joi.object({
  text: Joi.string()
    .pattern(new RegExp(/[\w\d\séùàüäîçïèêôö]*$/))
    .min(3)
    .max(30),

  isActive: Joi.boolean(),
});

const Message = mongoose.model("Message", messageSchema);

module.exports.Message = Message;
module.exports.schemaValidationMessage = schemaValidationMessage;
module.exports.schemaPutValidationMessage = schemaPutValidationMessage;