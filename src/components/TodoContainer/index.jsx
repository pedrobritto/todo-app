import React, { useState } from "react";

import "./style.scss";

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
        completed: false
      }
    ];

    setTodos(updatedTodos);
    setStoreTodos(updatedTodos);
  };

  const handleCheckItem = event => {
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

  const handleRemoveClickedItem = event => {
    const clickedItem = event.target.closest("li");
    const clickedItemId = clickedItem.id;
    const remainingTodos = todos.filter(todo => todo.id !== clickedItemId);

    setTodos(remainingTodos);
    setStoreTodos(remainingTodos);
  };

  return (
    <div className="TodoContainer">
      <h1 className="TodoContainer__title">
        <span role="img" aria-label="Note emoji">
          📝
        </span>{" "}
        Simple Todo App
      </h1>

      <TodoInput handleInput={handleInput} inputValue={inputValue} handleSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        handleCheckItem={handleCheckItem}
        handleRemoveCompleted={handleRemoveCompleted}
        handleRemoveClickedItem={handleRemoveClickedItem}
      />
    </div>
  );
};

export default TodoContainer;
