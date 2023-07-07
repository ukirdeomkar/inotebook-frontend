import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const s = {
        "name" : "Omkar",
        "div" : "A"
    }
    const [state, setstate] = useState(s);
    const update =()=>{
        setTimeout(() => {
            setstate({
                "name" : "Chibisou",
                "div" : "A"
            })
        }, 2000);
    }
    return(
        
        <NoteContext.Provider  value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
        
    )
}
export default NoteState;