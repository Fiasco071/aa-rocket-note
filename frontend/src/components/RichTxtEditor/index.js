import { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';
import draftToHtml from 'draftjs-to-html';
/// gonna use this to covert queried string into displayable info.
/// however lets also consider displaying directly onto the richtext editor
import htmlToDraft from 'html-to-draftjs';

const ControlledEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }
 // this extracts value out of it. not on to saving it to DB.
  // useEffect(()=> {
  //   console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  // }, [editorState])
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
    </div>
  )
}


export default ControlledEditor;