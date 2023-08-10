import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const CreateNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
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
      <button type='submit' className='btn btn-primary' onClick={handleClick}>
        Add Note
      </button>
    </form>
  );
};

export default CreateNote;
