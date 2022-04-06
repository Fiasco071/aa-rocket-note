import './index.css';

import { useEffect, useRef } from "react";
import ScratchPad from "../ScratchPad";
import NoteSlider from "../NoteSlider";
import SummaryBox from '../SummaryBox';
import { fetchNotebooks } from '../../store/notebookReducer';
import { fetchNotes } from "../../store/noteReducer";
import { useDispatch, useSelector } from 'react-redux';

const ContentBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Main Page';
  }, []);
  const user = useSelector(state => state.session.user)
  const pageBottomRef = useRef(null)
  const scrollToBottom = () => {
    pageBottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(fetchNotes(user.id))
      dispatch(fetchNotebooks(user?.id))
    }
  }, [dispatch])

  return (
    <div className="container">
      <NoteSlider />
      <ScratchPad />
      <SummaryBox />
      <div ref={pageBottomRef} />
    </div>
  );
}

export default ContentBox