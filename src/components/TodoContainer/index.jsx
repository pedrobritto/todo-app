import React, { useState } from "react";

import { initTodoStore, cleanTodoStore, getStoreTodos, setStoreTodos } from "./helpers";

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
        completed: false
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

    todosCopy[clickedTodoIndex].completed = !todosCopy[clickedTodoIndex].completed;
    setTodos(todosCopy);
    setStoreTodos(todosCopy);
  };

  const handleRemoveCompleted = () => {
    const incompleteTodos = todos.filter(todo => !todo.completed);

    setTodos(incompleteTodos);
    setStoreTodos(incompleteTodos);
  };

  return (
    <div className="TodoContainer">
      <h1>
        <span role="img" aria-label="Note emoji">
          📝
        </span>{" "}
        Todo App
      </h1>

      <TodoInput handleInput={handleInput} inputValue={inputValue} handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        handleRemoveItem={handleRemoveItem}
        handleRemoveCompleted={handleRemoveCompleted}
      />
    </div>
  );
};

export default TodoContainer;
