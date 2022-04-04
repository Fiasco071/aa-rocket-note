import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../store/noteReducer';
import './index.css';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

/// gonna use this to covert queried string into displayable info.
/// however lets also consider displaying directly onto the richtext editor
//import htmlToDraft from 'html-to-draftjs';

const UpdateFormEditor = ({ noteId }) => {
  const dispatch = useDispatch();
  const notesObj = useSelector(state => state.notes.entries);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(
    htmlToDraft(noteId ? notesObj[noteId].content : '')
  )))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const data = {
      id: notesObj[noteId].id,
      title: 'untitled',
      content: rawData,
      noteBookId: 1,      // needs to turn dynamic with notebook
      userId: 10          // grab from session value
    }
    await dispatch(updateNote(noteId,data));
  };

  return (
    <div className="editor">
      <header className="editor-header">
        Rich Text Editor Example
      </header>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={onEditorStateChange}
      />
      <button onClick={handleSubmit}></button>
    </div>

  )
}


export default UpdateFormEditor;
