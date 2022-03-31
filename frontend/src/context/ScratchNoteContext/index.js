import { useState, createContext } from "react";

export const ScratchNoteContext = createContext();

export default function ScratchNoteProvider(props) {
    const [scratchNoteSaved, setScratchNoteSaved] = useState('');
  
    return (
      <ScratchNoteContext.Provider
        value={{
            scratchNoteSaved,
            setScratchNoteSaved
        }}
      >
        {props.children}
      </ScratchNoteContext.Provider>
    )
  }