import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import axios from "axios";

export default function TodoList() {

  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    console.log('Component mounted successfully...');
    refreshList();
  }, [])

  const refreshList = async() => {
    console.log('refreshList called...');
    try {
      const response = await axios.get("https://api.nstack.in/v1/todos");
      console.log("response todolist", response);
      setTodoState(response.data.items);
    } catch (e) {
      console.log("error",e)
    }
  };
  
  const handleSubmit = async (item) => {
    const currentItems = { ...item, description: ' '};

    try {
      const response = await axios.post("https://api.nstack.in/v1/todos/", currentItems);
      console.log("response from POST ---", response);
      //return;
      refreshList();
    } catch (e) {
      console.log("error",e)
    }
  };
  
  const handleEdit = (item) => {
    alert("Edit :: " + JSON.stringify(item));
  };

  const handleDelete = (item) => {
    alert("Delete :: " + JSON.stringify(item));
  };
  
  return (
    <div>
      <TodoInput
        key={todoState._id}
        handleSubmit={handleSubmit} />
        <ul className="list-group my-2">
          {todoState?.map((item) => {
            return <TodoItem
              key={item._id}
              handleEdit={handleEdit}
              editItem={item.editItem}
              handleDelete={handleDelete}
              item={item} />
          })}
        </ul>
    </div>
      
  );
}