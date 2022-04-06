import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../store/noteReducer';
import './index.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { useParams, useHistory } from 'react-router-dom';
import { deleteOneNote } from '../../store/noteReducer';

/// gonna use this to covert queried string into displayable info.
/// however lets also consider displaying directly onto the richtext editor
//import htmlToDraft from 'html-to-draftjs';

const UpdateFormEditor = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { noteId } = useParams();
  const user = useSelector(state => state.session.user);
  const notesObj = useSelector(state => state.notes.entries);
  const notebooks = useSelector(state => state.notebooks.notebooks);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(
    htmlToDraft(noteId ? notesObj[noteId]?.content : '')
  )))
  const [title, setTitle] = useState(notesObj[noteId]?.title);
  const [notebook, setNotebook] = useState(notebooks[notesObj[noteId]?.noteBookId]?.id)
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  useEffect(() => {
    setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(
      htmlToDraft(noteId ? notesObj[noteId]?.content : '')
    )))

    setTitle(notesObj[noteId]?.title);
    setNotebook(notebooks[notesObj[noteId]?.noteBookId]?.id)
  }, [noteId])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawData = draftToHtml(convertToRaw(editorState?.getCurrentContent()));
    const data = {
      id: notesObj[noteId].id,
      title,
      content: rawData,
      noteBookId: notebook,      // needs to turn dynamic with notebook
      userId: user.id          // grab from session value
    }
    await dispatch(updateNote(noteId, data));
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteOneNote(id));
    history.push('/')
  };

  return (
    <div className="editor">
      <header className="editor-header">
        <input
          className='title-input'
          type="text"
          placeholder="Title goes here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <select
          className='notebook-select'
          value={notebook}
          onChange={(e) => (setNotebook(e.target.value))}
        >
          {Object.values(notebooks).map(notebook => (
            <option key={notebook.id} value={notebook.id}>{notebook.name}</option>
          ))}
        </select>
        <button
          className='edit-button'
          onClick={(e) => handleDelete(e, noteId)}
        >
          DELETE
        </button>
        <button
          className='edit-button'
          onClick={handleSubmit}>
          EDIT
        </button>
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


export default UpdateFormEditor;
