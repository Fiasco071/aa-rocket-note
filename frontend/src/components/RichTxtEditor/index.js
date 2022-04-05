import { useEffect, useState, useContext } from 'react';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';
import draftToHtml from 'draftjs-to-html';
/// gonna use this to covert queried string into displayable info.
/// however lets also consider displaying directly onto the richtext editor
//import htmlToDraft from 'html-to-draftjs';
import { ScratchNoteContext } from '../../context/ScratchNoteContext';
import { useDispatch, useSelector } from 'react-redux';
import { createNewNote } from '../../store/noteReducer';

const ControlledEditor = ({ noteId }) => {
  const dispatch = useDispatch();
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
      noteBookId: notebook,      // needs to turn dynamic with notebook
      userId: user.id          // grab from session value
    }
    await dispatch(createNewNote(data));
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
        <select
          onChange={(e) => (setNotebook(e.target.value))}
        >
            {Object.values(notebooks).map(notebook => (
              <option key={notebook.id} value={notebook.id}>{notebook.name}</option>
            ))}
        </select>
        <button className="y-button" onClick={handleSubmit} style={{ fontSize: '20px' }}>SUBMIT</button>
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