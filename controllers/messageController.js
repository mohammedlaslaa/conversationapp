const { Message, schemaValidationMessage } = require("../models/messageModel");
const { Conversation } = require("../models/conversationModel");

exports.postMessage = async (req, res) => {
  try {
    // Validation post message.

    const { error } = schemaValidationMessage.validate(req.body);
    if (error)
      return res.status(400).send({ error: true, message: error.message });

    // Check if the conversation is already existing.

    let conversation = await Conversation.findOne({ _id: req.body.fkConversation });

    // If there is not conversation with the id provided, send back a 400 response status code with a message.

    if (!conversation)
      return res.status(400).send({
        error: true,
        message: "There is no conversation with the id provided",
      });

      
      const { fkConversation, text } = req.body;
      
      let message = new Message({
        fkConversation,
        text,
      });

      
    message = await message.save();
    
    conversation.messages.push(message._id);
    
    await conversation.save();
    return res.status(201).send({
      error: false,
      message: `Message sent successfully`,
      message,
    });
  } catch (e) {
    return res.status(404).send({ error: true, message: e.message });
  }
};
