const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const NoteRepository = require('../../db/notesRepository');
// const { requireAuth } = require('../../utils/auth');

router.get('/', asyncHandler(async (_req, res) => {
    const response = await NoteRepository.list();
    console.log(res.json(response));
    return res.json(response);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const response = await NoteRepository.one(req.params.id);
    return res.json(response);
}));

router.post('/new', asyncHandler(async (req, res) => {
    /// req.body will be changed to a redux value that will be pulled from useSelector and dispatch and thunk acition creator
    const {
        title,          // redux
        content,        // redux
        noteBookId,     // pull this from redux
        userId          // pull this from session value
    } = req.body;       // req.body will change to redux state value
    const id = await NoteRepository.create(req.body);
    return id;
}));


router.put(
    '/:id',
    asyncHandler(async (req, res) => {
        const id = await NoteRepository.update(req.body);
        const note = await NoteRepository.one(req.params.id);
        return res.json(note);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const note = await NoteRepository.one(req.params.id);
        await coin.destroy(); 
    })
);
module.exports = router;