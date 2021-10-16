var express = require("express");
var router = express.Router();

const {
  getQueues,
  createQueue,
  deleteQueue,
} = require("../controllers/queueController");

router.get("/queues", getQueues);
router.post("/queue", createQueue);
router.delete("/queue/:id", deleteQueue);

module.exports = router;
