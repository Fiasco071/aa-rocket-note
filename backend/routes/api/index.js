const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const notesRouter = require('./notes.js');
const notebookRouter = require('./notebooks.js')
const tagRouter = require('./tags.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/notes', notesRouter);

router.use('/notebooks', notebookRouter);

router.use('/tags', tagRouter);

module.exports = router;