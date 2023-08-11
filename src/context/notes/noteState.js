import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // const host = "http://localhost:4000";
  const host = process.env.REACT_APP_BACKEND_HOST_URL;
  const currNotes = [];
  const [notes, setNotes] = useState(currNotes);
  const fetchNotes = async () => {
    // const { title, description, tag } = currNote;
    // API Call : (Google it - Fetch API)
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2YzNDNkYWI3MjdjMmJhOTcyZmMxIiwiZW1haWwiOiJ1a2lyZGUxMUBnbWFpbC5jb20ifSwiaWF0IjoxNjg5Nzg3OTg2fQ.9um_J2gncfYUZPYutecUbXFLMV0-qRmJbeGoFNe3CI4",
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  const addNote = async (currNote) => {
    const { title, description, tag } = currNote;
    // API Call : (Google it - Fetch API)
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2YzNDNkYWI3MjdjMmJhOTcyZmMxIiwiZW1haWwiOiJ1a2lyZGUxMUBnbWFpbC5jb20ifSwiaWF0IjoxNjg5Nzg3OTg2fQ.9um_J2gncfYUZPYutecUbXFLMV0-qRmJbeGoFNe3CI4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    
    const json =  await response.json();

    const note = json;
    setNotes(notes.concat(note));
  };
  const deleteNote = async(id) => {
    console.log("id :", id);
    // api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2YzNDNkYWI3MjdjMmJhOTcyZmMxIiwiZW1haWwiOiJ1a2lyZGUxMUBnbWFpbC5jb20ifSwiaWF0IjoxNjg5Nzg3OTg2fQ.9um_J2gncfYUZPYutecUbXFLMV0-qRmJbeGoFNe3CI4",
      }
    });
    
    console.log( await response.json());


    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    console.log(newNotes);
    setNotes(newNotes);
  };
// eslint-disable-next-line
  const editNote = async (id, title, description, tag) => {
    // const {  } = currNote;
    
      // API Call : (Google it - Fetch API)
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2YzNDNkYWI3MjdjMmJhOTcyZmMxIiwiZW1haWwiOiJ1a2lyZGUxMUBnbWFpbC5jb20ifSwiaWF0IjoxNjg5Nzg3OTg2fQ.9um_J2gncfYUZPYutecUbXFLMV0-qRmJbeGoFNe3CI4",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      console.log(json)
    
      
      let newNotes = JSON.parse(JSON.stringify(notes));
      // logic to edit in client
      for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
     
    }
    // console.log(newNotes);
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, fetchNotes ,  editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
