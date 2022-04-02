import { useEffect, useState, useContext } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';
import draftToHtml from 'draftjs-to-html';
/// gonna use this to covert queried string into displayable info.
/// however lets also consider displaying directly onto the richtext editor
import htmlToDraft from 'html-to-draftjs';
import { ScratchNoteContext } from '../../context/ScratchNoteContext';
import { useDispatch, useSelector } from 'react-redux';
import { createNewNote } from '../../store/noteReducer';

const ControlledEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

 // this extracts value out of it. now on to saving it to DB.
  // useEffect(()=> {
  //   let rawData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  // }, [editorState])
  const dispatch = useDispatch();
  
//   const ScratchNoteCon = useContext(ScratchNoteContext);
//   const blocksFromHtml = htmlToDraft(ScratchNoteCon.scratchNoteSaved);
//   useEffect(() => {
//     const autoSave = setTimeout( async () => {
//         if (editorState !== '') {
//             await ScratchNoteCon.setScratchNoteSaved(draftToHtml(convertToRaw(editorState.getCurrentContent())));
//             console.log(blocksFromHtml)
//         }
//     }, 10000);
    
//     return () => {
//       clearTimeout(autoSave);
//       };
// }, [editorState]);

const handleSubmit = async (e) => {
  e.preventDefault();
  let rawData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  let data = {
    title: 'untitled',
    content: rawData,
    noteBookId: 1,      // needs to turn dynamic with notebook
    userId : 10          // grab from session value
  }
  await dispatch(createNewNote(data));
};

  return (
    <div className="editor">
      <header className="editor-header">
        Rich Text Editor Example
      </header>
      <Editor
        editorState={/*!draftToHtml(convertToRaw(editorState.getCurrentContent())) ? blocksFromHtml : */editorState}
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