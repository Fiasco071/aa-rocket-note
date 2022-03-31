import './index.css';

import { useEffect, useState } from "react";
import ScratchPad from "../ScratchPad";
import NoteSlider from "../NoteSlider";
import SummaryBox from '../SummaryBox';

const ContentBox = () => {
    const [title, setTitle] = useState("Main Page");
    
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = title;
      }, [title]);
    return (
        <div className="container">
            <NoteSlider />
            <ScratchPad />
            <SummaryBox />
        </div>
    );
}

export default ContentBox