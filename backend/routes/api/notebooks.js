const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const notebooksRepository = require('../../db/notebooksRepository');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const notebookValidator = [
    check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Notebook name.")
    .isLength({ max: 50 })
    .withMessage("Notebook name must not be more than 50 characters long."),
    handleValidationErrors
];


router.get('/:userId', asyncHandler(async (req, res) => {
    const response = await notebooksRepository.list(req.params.userId);
    return res.json(response);
}));

router.post('/', notebookValidator, asyncHandler(async (req, res) => {
    /// req.body will be changed to a redux value that will be pulled from useSelector and dispatch and thunk acition creator
    const newNote = await notebooksRepository.create(req.body);
    return res.json(newNote);
}));

router.put(
    '/:id', 
    notebookValidator,
    asyncHandler(async (req, res) => {
        const id = await notebooksRepository.update(req.params.id, req.body);
        const note = await notebooksRepository.one(req.params.id);
        return res.json(note);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const note = await notebooksRepository.deleteNotebook(req.params.id);
        res.status(204).end();
    })
);
module.exports = router;