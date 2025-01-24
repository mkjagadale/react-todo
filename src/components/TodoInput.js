import React, { useState } from "react";
import axios from "axios";

export default function TodoInput({handleSubmit}) {

  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState('');

  /* const handleTodos = async(item) => {
    const currentItems = { ...item, description: ' '};
    try {
      const response = await axios.post("https://api.nstack.in/v1/todos/", currentItems);
    } catch (e) {
      console.log("error",e)
    }
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
            onChange={(e) => setCompleted(e.target.value)}
          />
          <label className="form-check-label">Completed</label>
        </div>
        <button type="submit"
          className="btn btn-success mt-3"
          onClick={() => handleSubmit({title, "is_completed":completed})} >
          Add
        </button>
      </form>
    </div>
  );
}