import { useState, useEffect, useRef } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, /*faTag*/ } from '@fortawesome/free-solid-svg-icons';

/// gonna use this to covert queried string into displayable info.
/// however lets also consider displaying directly onto the richtext editor
//import htmlToDraft from 'html-to-draftjs';

const UpdateFormEditor = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { noteId } = useParams();
  const ref = useRef();
  const user = useSelector(state => state.session.user);
  const notesObj = useSelector(state => state.notes.entries);
  const notebooks = useSelector(state => state.notebooks.notebooks);
  const [errors, setErrors] = useState([]);
  const [editorState, setEditorState] = useState(EditorState?.createWithContent(ContentState?.createFromBlockArray(
    htmlToDraft(noteId ? notesObj[noteId]?.content : '')
  )))
  const [title, setTitle] = useState(notesObj[noteId]?.title);
  const [notebook, setNotebook] = useState()
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  useEffect(() => {
    setEditorState(EditorState?.createWithContent(ContentState?.createFromBlockArray(
      htmlToDraft(noteId ? notesObj[noteId]?.content : '<></>')
    )))

    setTitle(notesObj[noteId]?.title);
    setNotebook(notebooks[notesObj[noteId]?.noteBookId]?.id)
  }, [noteId, notebooks, notesObj])

  const addClass = () => {
    ref.current.classList.add('toggle-hidden')
  }
  const removeClass = () => {
    ref.current.classList.remove('toggle-hidden')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const rawData = draftToHtml(convertToRaw(editorState?.getCurrentContent()));
    const data = {
      id: noteId,
      title,
      content: rawData,
      noteBookId: notebook,
      userId: user.id
    }
    dispatch(updateNote(noteId, data))
      .then((value) => {
        removeClass()
        setTimeout(() => {
          addClass();
        }, 1500)
      })
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        }
      );
  };


  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteOneNote(id));
    history.push('/')
  };

  // const tagSubmit = (e, id) => {
  //   e.stopPropagation();
  //   //dispatch tag create thunk

  //   //dispatch note load thunk
  // }

  // useEffect(() => {
  //   const autoSave = setTimeout( async() => {
  //     const rawData = draftToHtml(convertToRaw(editorState?.getCurrentContent()));
  //   const data = {
  //     id: noteId,
  //     title,
  //     content: rawData,
  //     noteBookId: notebook,
  //     userId: user.id
  //   }
  //   dispatch(updateNote(noteId, data));
  //     removeClass()
  //   setTimeout(() => {
  //     addClass();
  //   }, 1500)
  //   }, 10000);

  //   // return () => {
  //   //   clearInterval(autoSave);
  //   // };
  // }, [editorState]);


  return (
    <div className="editor">
      <header className="editor-header">
        <div className='error-message-box'>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
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
              value={notebook}
              onChange={(e) => (setNotebook(e.target.value))}
            >
              {Object.values(notebooks)?.map(notebook => (
                <option key={notebook?.id} value={notebook?.id}>{notebook?.name}</option>
              ))}
            </select>
          </div>

          <div>
            <button
              className='edit-button'
              onClick={handleSubmit}>
              SAVE
            </button>
            <button
              className='edit-button'
              onClick={(e) => handleDelete(e, noteId)}
            >
              DELETE
            </button>
          </div>
        </div>
        {/* <div className='tag-input-box'>
          <form>
            <FontAwesomeIcon icon={faTag} />
            <input
              placeholder='Add a tag...'
            />
          </form>
        </div> */}
      </header>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={onEditorStateChange}
      />
      <p ref={ref} className='save-message toggle-hidden'>Note saved...</p>
    </div>

  )
}


export default UpdateFormEditor;
