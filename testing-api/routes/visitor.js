var express = require("express");
var router = express.Router();

const {
  getVisitors,
  createVisitor,
  getVisitor,
  updateVisitor,
  deleteVisitor,
} = require("../controllers/visitorController");

router.get("/visitors", getVisitors);
router.post("/visitor", createVisitor);
router.get("/visitor/:id", getVisitor);
router.put("/visitor/:id", updateVisitor);
router.delete("/visitor/:id", deleteVisitor);

module.exports = router;
