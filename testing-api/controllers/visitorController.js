const { Visitor, validate } = require("../models/Visitor");

const getVisitors = async (req, res, next) => {
  const visitors = await Visitor.find().sort({ createdAt: -1 }).exec();
  res.status(200).send({
    code: "success",
    message: "List of visotors order by time created desc",
    data: visitors,
  });
};

const createVisitor = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(422).send({
      code: "danger",
      message: error.details[0].message,
    });
  }

  let visitor = new Visitor(req.body);

  visitor = await visitor.save();
  res.status(200).send({
    code: "success",
    message: "Visitor created",
    data: visitor,
  });
};

const getVisitor = async (req, res, next) => {
  const visitor = await Visitor.findById(req.params.id);
  if (!visitor) {
    return res.status(401).send({
      code: "danger",
      message: "Visitor not found",
    });
  }

  res.status(200).send({
    code: "success",
    message: "Details of visitor",
    data: visitor,
  });
};

const updateVisitor = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(422).send({
      code: "danger",
      message: error.details[0].message,
    });
  }

  let visitor = await Visitor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!visitor) {
    return res.status(401).send({
      code: "danger",
      message: "Visitor not found",
    });
  }

  res.status(200).send({
    code: "success",
    message: "Visitor updated",
    data: visitor,
  });
};

const deleteVisitor = async (req, res, next) => {
  const visitor = await Visitor.findByIdAndRemove(req.params.id);
  if (!visitor) {
    return res.status(401).send({
      code: "danger",
      message: "Visitor not found",
    });
  }

  res.status(200).send({
    code: "success",
    message: "Visitor deleted",
    data: visitor,
  });
};

module.exports = {
  getVisitors,
  createVisitor,
  getVisitor,
  updateVisitor,
  deleteVisitor,
};
