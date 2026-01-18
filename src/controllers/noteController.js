const Note = require("../models/Note");

exports.getAll = async (req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
};

exports.getOne = async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  res.json(note);
};

exports.create = async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
};

exports.update = async (req, res) => {
  await Note.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Updated" });
};

exports.delete = async (req, res) => {
  await Note.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
};