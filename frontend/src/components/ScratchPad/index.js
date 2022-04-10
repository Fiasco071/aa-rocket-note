import './index.css';
import React, { useState } from 'react';
//import { ScratchNoteContext } from '../../context/ScratchNoteContext';
import Calendar from 'react-calendar';


const ScratchPad = () => {
    // const [scratchNote, setScratchNote] = useState('');
    // const ScratchNoteCon = useContext(ScratchNoteContext);
    const [value, onChange] = useState(new Date());


    // useEffect(() => {
    //     const autoSave = setInterval(async () => {
    //         if (scratchNote !== '') {
    //             await ScratchNoteCon.setScratchNoteSaved(scratchNote);
    //         }
    //     }, 10000);

    //     return () => {
    //         clearInterval(autoSave);
    //     };
    // }, [scratchNote]);

    // useEffect(() => {
    //     console.log(value);
    // },[value])


    return (
        <div className="box">
            <div className="content">
                <div className='scratchpad-head-box'>
                    <h2 className='scratchpad-title'>Calendar</h2>
                </div>
                <div className='calendar-box'>
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div>
        </div>
    )
}

export default ScratchPad;


