const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const messageSchema = new mongoose.Schema({
  fkConversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },

  text: {
    type: String,
    minlength: 1,
    maxlength: 250,
    required: true,
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
});

// Note that the fields send in the request that are not in this JOI Object will automatically throw a rejected request.

// Validator with the required fields.

const schemaValidationMessage = Joi.object({
  fkConversation: Joi.string().required(),

  text: Joi.string().min(1).max(250).required(),

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
