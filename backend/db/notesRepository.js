
const { Note } = require("./models");

async function list() {
    return await Note.findAll();
}

async function one(id) {
  return await Note.findByPk(id);
}

async function create(details) {
  const note = await Note.create(details);
  return note.id;
}

async function update(details) {
  const id = details.id;
  delete details.id;
  await Pokemon.update(
    details,
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );
  return id;
}

// async function delete {
//   const id = 
// }

module.exports = {
  list,
};