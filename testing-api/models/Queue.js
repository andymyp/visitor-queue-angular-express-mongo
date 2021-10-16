const mongoose = require("mongoose");
const Joi = require("joi");

const queueScheme = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Queue = mongoose.model("Queue", queueScheme);

const validate = (queue) => {
  const scheme = Joi.object({
    number: Joi.string().required(),
  });

  return scheme.validate(queue);
};

module.exports = {
  Queue,
  validate,
};
