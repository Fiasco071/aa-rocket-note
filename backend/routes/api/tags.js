const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const tagsRepository = require('../../db/tagsRepository');

router.post('/', asyncHandler(async (req, res) => {
    /// req.body will be changed to a redux value that will be pulled from useSelector and dispatch and thunk acition creator
    const newNote = await tagsRepository.create(req.body);
    return res.json(newNote);
}));

router.put(
    '/:id', 
    asyncHandler(async (req, res) => {
        const id = await tagsRepository.update(req.params.id, req.body);
        const note = await tagsRepository.one(req.params.id);
        return res.json(note);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const note = await tagsRepository.deleteTag(req.params.id);
        res.status(204).end();
    })
);

module.exports = router;