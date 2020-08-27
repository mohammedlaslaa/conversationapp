const {
  Conversation,
  schemaPutValidationConversation,
} = require("../models/conversationModel");

exports.getAll = async (req, res) => {
  try {
    const allConversation =
      req.params.all === "all"
        ? await Conversation.find({
            isActive: true,
          })
        : await Conversation.find({
            isActive: true,
            isClosed: false,
          });

    await Conversation.find({
      isActive: true,
      isClosed: false,
    });

    return res.status(200).send({
      allConversation,
    });
  } catch (e) {
    return res.status(404).send({ error: true, message: e.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.params.id).populate(
      "messages"
    );

    if (!conversation)
      return res.status(400).send({
        error: true,
        message: "There is no conversation with the id provided",
      });

    return res.status(200).send({
      conversation,
    });
  } catch (e) {
    return res.status(404).send({ error: true, message: e.message });
  }
};

exports.createConversation = async (req, res) => {
  try {
    // Get the max value of conversationId and increment it to the next conversation registered.

    const maxId = await Conversation.find()
      .sort({ conversationId: -1 })
      .limit(1)
      .select("conversationId");

    let valueId;

    // If the maxId does not return a value set the valueId to 1 by default.

    maxId.length == 0 ? (valueId = 1) : (valueId = maxId[0].conversationId + 1);

    // Create a new conversation document.

    let conversation = new Conversation({
      conversationId: valueId,
      title: `Conversation ${valueId}`,
    });

    // If all the checks is passing, save the conversation, then send back a 201 response status code with a successfull message.

    conversation = await conversation.save();
    return res.status(201).send({
      error: false,
      message: `The conversation has been created`,
      conversation,
    });
  } catch (e) {
    return res.status(404).send({ error: true, message: e.message });
  }
};

exports.updateConversation = async (req, res) => {
  try {
    // Validation put conversation.

    const { error } = schemaPutValidationConversation.validate(req.body);
    if (error)
      return res.status(400).send({ error: true, message: error.message });

    // Check if the conversation is already existing.

    let conversation = await Conversation.findOne({ _id: req.params.id });

    // If there is not conversation with the id provided, send back a 400 response status code with a message.

    if (!conversation)
      return res.status(400).send({
        error: true,
        message: "There is no conversation with the id provided",
      });

    conversation = await Conversation.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      date_update: Date.now(),
    });

    return res.status(200).send({ error: false, conversation });
  } catch (e) {
    return res.status(404).send({ error: true, message: e.message });
  }
};
