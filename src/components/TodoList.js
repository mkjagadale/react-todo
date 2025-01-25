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
    //console.log('handleSubmit called...');
    const currentItems = { ...item, "description": "" };
    const itemsJSON = JSON.stringify(currentItems);
    const headers = {
      'Content-Type': 'application/json'
    }
    
    //const response = await axios.post('https://api.nstack.in/v1/todos/', itemsJSON)
    const response = await axios.post('https://api.nstack.in/v1/todos/', itemsJSON, { "headers": headers })
    console.log("response from POST ---", response);
    refreshList();
  };
  
  const handleEdit = (item) => {
    // console.log('handleEdit called...');
    alert("Edit :: " + JSON.stringify(item));
  };

  const handleDelete = async (item) => {
    //alert("Delete :: " + JSON.stringify(item));
    const response = await axios.delete("https://api.nstack.in/v1/todos/"+item);
    console.log("response deleted item", response);
    refreshList();
  };
  
  return (
    <div>
      <TodoInput
        key={todoState._id}
        handleSubmit = {handleSubmit} />
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