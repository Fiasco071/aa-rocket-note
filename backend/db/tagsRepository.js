const { Tag } = require("./models");
const note = require("./models/note");

async function one(id) {
    return await Tag.findByPk(id)
}

async function create(name) {
    const tag = await Tag.create(name);
    return note;
}

async function update(id, payload) {
    await Tag.update(
        {
            name: payload.name
        },
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    return payload;
}
  
async function deleteTag(id) {
    const tag = await Tag.findByPk(id)
    await tag.destroy();
  }
  
  module.exports = {
    create,
    one,
    update,
    deleteTag
  };