import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const currNotes = [
    {
      _id: "64a53017913caa5a563f747a",
      user: "64a3f343dab727c2ba972fc1",
      title: "My Name is Omkar1",
      description: "It is my name",
      tag: "personal",
      date: "2023-07-05T08:55:51.537Z",
      __v: 0,
    },
    {
      _id: "64a53018913caa5a563f747c",
      user: "64a3f343dab727c2ba972fc1",
      title: "My Name is Omkar2",
      description: "It is my name",
      tag: "personal",
      date: "2023-07-05T08:55:52.384Z",
      __v: 0,
    },
    {
      _id: "74a53017913caa5a563f747a",
      user: "64a3f343dab727c2ba972fc1",
      title: "My Name is Omkar3",
      description: "It is my name",
      tag: "personal",
      date: "2023-07-05T08:55:51.537Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(currNotes);

  const addNote = (currNote) => {
    const { title, description, tag } = currNote;
    // to do api call
    const note = {
      _id: "84a53017915caa5a5738747a",
      user: "64a3f343dab727c2ba972fc1",
      title: title,
      description: description,
      tag: tag,
      date: "2023-07-05T08:55:51.537Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  const deleteNote = (id) => {
    console.log("id :", id);
    // todo api call
    
    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    console.log(newNotes)
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
