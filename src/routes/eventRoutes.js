const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { 
  getEvents, 
  createEvent, 
  updateEvent, 
  deleteEvent 
} = require("../controllers/eventController");

router.use(auth);

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;

