import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import '../css/Form-Style.css'

export default function MyForm({
  handleTodo, myData, isUpdate, handleClose
  }) {

  const [todo, setTodo] = useState(isUpdate? myData : {id: uuidv4(), title: "", description: "", priority: '1', _status: 'Pending', created: new Date(), updated: new Date() });
  const {id, title, description, priority, _status, created, updated} = todo;
  console.log('I am in Form');  
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setTodo((prevTodo) => ({
      ...prevTodo,
      [fieldName]: value,
    }));

    //console.log(fieldName, value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Hello Form`);
    todo.updated = new Date();
    setTodo(todo);
    handleTodo(todo);
    setTodo({id: uuidv4(), title: "", description: "", priority: '1', _status: 'Pending', created: new Date(), updated: new Date() });
    handleClose();
  };

    const handleReset = () => {
      setTodo({id: uuidv4(), title: "", description: "", priority: '1', _status: 'Pending', created: new Date(), updated: new Date() });
    }
    return (
        <>
        <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={title} onChange={handleChange} />
        </div>
    
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" id="description" value={description} onChange={handleChange} />
        </div>

        <div>
      <label htmlFor="_status">Status: </label>
      <select name="_status" id="_status" value={_status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

        <div>
      <label htmlFor="priority">Priority: </label>
      <select name="priority" id="priority" value={priority} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    
        <input type="hidden" name="created" value={created} />
        <input type="hidden" name="updated" value={updated} />
        <input type="hidden" name="id" value={id} />
        {console.log("Created: ", created)}
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <button type="reset" style={{backgroundColor: 'red'}} onClick={handleReset}>Reset</button>
        </div>
    </form>
    
        </>
    );
};
