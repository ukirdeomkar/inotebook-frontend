import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import AlertContext from "../context/notes/alertContext";

const CreateNote = () => {
  const context = useContext(NoteContext);
  
  const { addNote  } = context;
  const context1  = useContext(AlertContext);
  const{showAlert} = context1;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
    showAlert("Note Added Succesfully","primary")
    setNote({
      title: "",
      description: "",
      tag: "",
    });
  };

  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input
          type='text'
          className='form-control'
          id='title'
          name='title'
          onChange={onChange}
          minLength={5}
          value={note.title}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          type='text'
          className='form-control'
          id='description'
          name='description'
          onChange={onChange}
          value={note.description}
          minLength={5}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='tag' className='form-label'>
          Tag
        </label>
        <input
          type='text'
          className='form-control'
          id='tag'
          name='tag'
          onChange={onChange}
          value={note.tag}
          minLength={5}
          required
        />
      </div>
      {/* <div className='mb-3 form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          id='exampleCheck1'
        />
        <label className='form-check-label' htmlFor='exampleCheck1'>
          Check me out
        </label>
      </div> */}
      <button
        disabled={note.title < 5 || note.description < 5}
        type='submit'
        className='btn btn-primary'
        onClick={handleClick}>
        Add Note
      </button>
    </form>
  );
};

export default CreateNote;
