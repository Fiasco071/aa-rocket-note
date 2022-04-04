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
  const notesObj = useSelector(state => state.notes.entries);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(
    convertFromHTML(noteId ? notesObj[noteId].content : '')
  )))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
    //console.log(editorState.getCurrentContent());
  }
  // this extracts value out of it. now on to saving it to DB.
  // useEffect(()=> {
  //   let rawData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  // }, [editorState])
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
      title: 'untitled',
      content: rawData,
      noteBookId: 1,      // needs to turn dynamic with notebook
      userId: 10          // grab from session value
    }
    await dispatch(createNewNote(data));
  };

  return (
    <div className="editor">
      {notesObj[noteId]?.content}
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


export default ControlledEditor;