import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const currNotes = [
        {
            "_id": "64a53017913caa5a563f747a",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:51.537Z",
            "__v": 0
          },
          {
            "_id": "64a53018913caa5a563f747c",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:52.384Z",
            "__v": 0
          },
          {
            "_id": "74a53017913caa5a563f747a",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:51.537Z",
            "__v": 0
          },
          {
            "_id": "84a53018913caa5a563f747c",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:52.384Z",
            "__v": 0
          },
          {
            "_id": "94a53017913caa5a563f747a",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:51.537Z",
            "__v": 0
          },
          {
            "_id": "10a53018913caa5a563f747c",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:52.384Z",
            "__v": 0
          },
          {
            "_id": "11a53017913caa5a563f747a",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:51.537Z",
            "__v": 0
          },
          {
            "_id": "12a53018913caa5a563f747c",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:52.384Z",
            "__v": 0
          },
          {
            "_id": "13a53017913caa5a563f747a",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:51.537Z",
            "__v": 0
          },
          {
            "_id": "14a53018913caa5a563f747c",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:52.384Z",
            "__v": 0
          },
          {
            "_id": "15a53017913caa5a563f747a",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:51.537Z",
            "__v": 0
          },
          {
            "_id": "16a53018913caa5a563f747c",
            "user": "64a3f343dab727c2ba972fc1",
            "title": "My Name is Omkar",
            "description": "It is my name",
            "tag": "personal",
            "date": "2023-07-05T08:55:52.384Z",
            "__v": 0
          },
    ]
    const [notes, setNotes] = useState(currNotes);
    return(
        
        <NoteContext.Provider  value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
        
    )
}
export default NoteState;