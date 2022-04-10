const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const NoteRepository = require('../../db/notesRepository');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const noteValidator = [
    check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Title.")
    .isLength({ max: 50 })
    .withMessage("Title must not be more than 50 characters long."),
    check("content")
    .isLength({ max: 2000 })
    .withMessage("Content must not be more than 2000 characters long."),
    handleValidationErrors
];


router.get('/:userId', asyncHandler(async (req, res) => {
    const response = await NoteRepository.list(req.params.userId);
    return res.json(response);
}));


router.post('/', noteValidator, asyncHandler(async (req, res) => {
    const newNote = await NoteRepository.create(req.body);
    return res.json(newNote);
}));

router.put(
    '/:id', noteValidator,
    asyncHandler(async (req, res) => {
        const id = await NoteRepository.update(req.params.id, req.body);
        const note = await NoteRepository.one(req.params.id);
        return res.json(note);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const note = await NoteRepository.deleteNote(req.params.id);
        res.status(204).end();
    })
);
module.exports = router;