import './index.css';
import React, { useState, useEffect, useContext} from 'react';
import { ScratchNoteContext } from '../../context/ScratchNoteContext';
import MyEditor from './MyEditor';

const ScratchPad = () => {
    const [ scratchNote, setScratchNote ] = useState('');
    const ScratchNoteCon = useContext(ScratchNoteContext);
    //console.log(ScratchNoteCon.scratchNoteSaved);

    useEffect(() => {
        const autoSave = setInterval( async () => {
            if (scratchNote !== '') {
                await ScratchNoteCon.setScratchNoteSaved(scratchNote);
            }
        }, 10000);
        
        return () => {
            clearInterval(autoSave);
          };
    }, [scratchNote]);


    

    return (
        <div className="box">
            <div className="content">
                <div className='scratchpad-head-box'>
                    <h2 className='scratchpad-title'>Scratch Pad...</h2>
                    {scratchNote && (
                        <h2>+</h2>
                    )}
                </div>
                <textarea
                    value={!scratchNote ? ScratchNoteCon.scratchNoteSaved : scratchNote}
                    onChange={(e) => setScratchNote(e.target.value)}
                    placeholder='Start writing...' 
                />
                <MyEditor />
            </div>
        </div>
    )
}

export default ScratchPad;