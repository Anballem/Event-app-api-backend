const Event = require("../models/eventModel");

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(event);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    console.error('Create event error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getEvents = async (req, res) => {
  const events = await Event.find({ createdBy: req.user.id });
  res.json(events);
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(event);
};

exports.deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
