const { Notebook } = require("./models");

async function list(userId) {
    return await Notebook.findAll({
        where: {
            userId
        }
    })
}

async function one(id) {
    return await Notebook.findByPk(id)
}


async function create(name) {
    const notebook = await Notebook.create(name);
    return notebook;
}

async function update(id, payload) {
    await Notebook.update(
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

async function deleteNotebook(id) {
    const notebook = await Notebook.findByPk(id)
    await notebook.destroy();
}

module.exports = {
    list,
    one,
    create,
    update,
    deleteNotebook
};