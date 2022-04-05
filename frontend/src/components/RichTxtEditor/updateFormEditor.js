import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../store/noteReducer';
import './index.css';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import {useParams} from 'react-router-dom';

/// gonna use this to covert queried string into displayable info.
/// however lets also consider displaying directly onto the richtext editor
//import htmlToDraft from 'html-to-draftjs';

const UpdateFormEditor = () => {
  const dispatch = useDispatch();
  const {noteId} = useParams();
  const notesObj = useSelector(state => state.notes.entries);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(
    htmlToDraft(noteId ? notesObj[noteId].content : '')
  )))
  const [title, setTitle] = useState(notesObj[noteId].title);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  useEffect(() => {
    setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(
      htmlToDraft(noteId ? notesObj[noteId].content : '')
    )))

    setTitle(notesObj[noteId].title);
  },[noteId])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const data = {
      id: notesObj[noteId].id,
      title,
      content: rawData,
      noteBookId: 1,      // needs to turn dynamic with notebook
      userId: 10          // grab from session value
    }
    await dispatch(updateNote(noteId, data));
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
