import './index.css';

import { useEffect, useRef } from "react";
import ScratchPad from "../ScratchPad";
import NoteSlider from "../NoteSlider";
import SummaryBox from '../SummaryBox';

const ContentBox = () => {
  useEffect(() => {
    document.title = 'Main Page';
  }, []);

  const pageBottomRef = useRef(null)
  const scrollToBottom = () => {
    pageBottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, []);

  

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