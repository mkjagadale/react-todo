import React, { useState } from "react";

export default function TodoInput({handleSubmit}) {

  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  
  /* const onHandleSubmitChange = (item) => {
    console.log('onHandleSubmitChange----', item)
    handleSubmit(item);
  } */

  return (
    <div className="card card-body">
      <form action="">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control text-capitalize"
            placeholder="add todo item"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            name="completed"
            className="form-check-input"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <label className="form-check-label">Completed</label>
        </div>
        {/* <button type="submit"
          className={
            props.editItem ? "btn btn-success mt-3" : "btn btn-primary mt-3"
          }
          onClick={() => handleSubmit(activeItem)} >
          { props.editItem ? "Edit" : "Add" }
        </button> */}
        {/* <button type="submit"
          className="btn btn-success mt-3"
          onClick={() => onHandleSubmitChange({title, is_completed: completed})} >
          Add
        </button> */}
        <button type="button"
          className="btn btn-success mt-3"
          onClick={() => handleSubmit({title, is_completed: completed})} >
          Add
        </button>
      </form>
    </div>
  );
}