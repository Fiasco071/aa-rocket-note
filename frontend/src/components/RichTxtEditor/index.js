import { useEffect, useState, useContext } from 'react';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';
import draftToHtml from 'draftjs-to-html';
import { ScratchNoteContext } from '../../context/ScratchNoteContext';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createNewNote } from '../../store/noteReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const ControlledEditor = ({ noteId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ScratchNoteCon = useContext(ScratchNoteContext);
  const notebooks = useSelector(state => state.notebooks.notebooks);
  const notesObj = useSelector(state => state.notes.entries);
  const user = useSelector(state => state.session.user);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(
    convertFromHTML(noteId ? notesObj[noteId].content : '')
  )))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  const [title, setTitle] = useState('untitled');
  const [notebook, setNotebook] = useState(Object.values(notebooks)[0]?.id)

  useEffect(() => {
    setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(
      convertFromHTML(noteId ? notesObj[noteId].content : '')
    )))
  }, [])

  useEffect(() => {
    const rawData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const autoSave = setTimeout(async () => {
      if (editorState !== '') {
        await ScratchNoteCon.setScratchNoteSaved(rawData);
        const content = ContentState.createFromText(convertFromHTML(ScratchNoteCon.scratchNoteSaved))
        console.log(ScratchNoteCon.scratchNoteSaved)
      }
    }, 3000);

    return () => {
      clearTimeout(autoSave);
    };
  }, [editorState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const data = {
      title,
      content: rawData,
      noteBookId: notebook,  
      userId: user.id          
    }
    const newNote = await dispatch(createNewNote(data));
    history.push(`/notes/${newNote.id}`)
  };

  return (
    <div className="editor">
      {notesObj[noteId]?.content}
      <header className="editor-header">
        <input
          className='title-input'
          type="text"
          placeholder="Title goes here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <div className='note-button-box'>
          <div>
            <FontAwesomeIcon icon={faBook} />
            <select
              className='notebook-select'
              onChange={(e) => (setNotebook(e.target.value))}
            >
              {Object.values(notebooks).map(notebook => (
                <option key={notebook.id} value={notebook.id}>{notebook.name}</option>
              ))}
            </select>
          </div>
          <div>
            <button className="edit-button" onClick={handleSubmit} >CREATE</button>
          </div>
        </div>
      </header>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={onEditorStateChange}
      />

    </div>

  )
}


export default ControlledEditor;