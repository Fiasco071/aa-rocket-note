import './index.css';

import { useEffect, useState, useRef } from "react";
import ScratchPad from "../ScratchPad";
import NoteSlider from "../NoteSlider";
import SummaryBox from '../SummaryBox';
import Orbits from '../Orbits'

const ContentBox = () => {
    const [title, setTitle] = useState("Main Page");
    const pageBottomRef = useRef(null)

    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = title;
      }, [title]);

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