const { Note } = require("./models");

async function list(userId) {
  return await Note.findAll({
    where: {
      userId
    }
  });
}

async function one(id) {
  return await Note.findByPk(id);
}

async function create(details) {
  const note = await Note.create(details);
  return note;
}

async function update(id, details) {
  await Note.update(
    {
      title: details.title,
      content: details.content
    },
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );
  return details.id;
}

async function deleteNote(id) {
  const note = await Note.findByPk(id)
  await note.destroy();
}

module.exports = {
  list,
  one,
  create,
  update,
  deleteNote
};