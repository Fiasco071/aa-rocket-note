import './index.css';

import { useEffect, useState, useRef } from "react";
import ScratchPad from "../ScratchPad";
import NoteSlider from "../NoteSlider";
import SummaryBox from '../SummaryBox';

const ContentBox = () => {
  const [title, setTitle] = useState("Main Page");

  useEffect(() => {
    document.title = title;
  }, [title]);

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