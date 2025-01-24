import React from "react";

export default function TodoItem({ handleDelete, handleEdit, item }) {
  return (
    <li
      key={item._id}
      className="list-group-item d-flex justify-content-between align-items-center" >
      <span className="mr-2">
        {item.is_completed ? <s>{item.title}</s> : item.title }
      </span>
      <span>
        <button className="btn btn-secondary mr-2" onClick={() => handleEdit(item)}>Edit</button>
        <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
      </span>
    </li>
  );  
}