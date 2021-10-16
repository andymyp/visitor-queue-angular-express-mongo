const mongoose = require("mongoose");
const Joi = require("joi");

const visitorScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Visitor = mongoose.model("Visitor", visitorScheme);

const validate = (visitor) => {
  const scheme = Joi.object({
    name: Joi.string().required(),
    gender: Joi.string().valid("male", "female").required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
  });

  return scheme.validate(visitor);
};

module.exports = {
  Visitor,
  validate,
};
