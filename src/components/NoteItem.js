import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className='col-md-4 my-2'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{note.title}</h5>
          <div className='d-flex flex-row-reverse'>
            <span className='material-symbols-outlined mx-1 align-items-center icon'>
              delete
            </span>
            <span className='material-symbols-outlined mx-1 align-items-center icon'>
              edit
            </span>
          </div>
          <p className='card-text'>{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
