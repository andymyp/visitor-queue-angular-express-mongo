const { Queue, validate } = require("../models/Queue");

const getQueues = async (req, res, next) => {
  const queues = await Queue.find().sort({ createdAt: -1 }).exec();
  res.status(200).send({
    code: "success",
    message: "List of queue order by time created desc",
    data: queues,
  });
};

const createQueue = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(422).send({
      code: "danger",
      message: error.details[0].message,
    });
  }

  let queue = new Queue(req.body);

  queue = await queue.save();
  res.status(200).send({
    code: "success",
    message: "Queue created",
    data: queue,
  });
};

const deleteQueue = async (req, res, next) => {
  const queue = await Queue.findByIdAndRemove(req.params.id);
  if (!queue) {
    return res.status(401).send({
      code: "danger",
      message: "Queue not found",
    });
  }

  res.status(200).send({
    code: "success",
    message: "Queue deleted",
    data: queue,
  });
};

module.exports = {
  getQueues,
  createQueue,
  deleteQueue,
};
