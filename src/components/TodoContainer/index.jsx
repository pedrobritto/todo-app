import React, { useState } from "react";

import { initTodoStore, getStoreTodos, setStoreTodos } from "./helpers";

import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";

const TodoContainer = () => {
  initTodoStore();

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(getStoreTodos());

  const handleInput = event => {
    const { target } = event;

    setInputValue(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue === "") {
      return;
    }

    setInputValue("");

    const updatedTodos = [
      ...todos,
      {
        id: String(Date.now()),
        todo: inputValue,
        complete: false
      }
    ];

    setTodos(updatedTodos);
    setStoreTodos(updatedTodos);
  };

  const handleRemoveItem = event => {
    const clickedItem = event.target.closest("li");
    const clickedItemId = clickedItem.id;
    const clickedTodoIndex = todos.findIndex(todo => todo.id === clickedItemId);
    const todosCopy = [...todos];

    todosCopy[clickedTodoIndex].complete = !todosCopy[clickedTodoIndex].complete;
    setTodos(todosCopy);

    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(todosCopy));
  };

  return (
    <div className="TodoContainer">
      <TodoInput handleInput={handleInput} inputValue={inputValue} handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default TodoContainer;
