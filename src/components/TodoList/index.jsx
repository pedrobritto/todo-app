import React from "react";

import "./style.scss";
import cx from "classnames";

import UICheckbox from "components/UI/Checkbox";

const TodoList = props => {
  const { todos, handleRemoveItem, handleRemoveCompleted } = props;

  const incompleteTodos = todos.filter(todo => todo.completed === false);
  const completeTodos = todos.filter(todo => todo.completed === true);

  const hasTodos = todos.length > 0;

  return (
    <div className="TodoList__container">
      {hasTodos ? (
        <React.Fragment>
          {incompleteTodos.length > 0 && (
            <header className="completed-todos__header">
              <h3 className="completed-todos__title">Todo tasks</h3>
            </header>
          )}

          <RenderTodoList todos={incompleteTodos} handleRemoveItem={handleRemoveItem} />

          {incompleteTodos.length > 0 && completeTodos.length > 0 && <div className="Separator" />}

          {completeTodos.length > 0 && (
            <header className="completed-todos__header">
              <h3 className="completed-todos__title">Completed tasks</h3>
              <button className="completed-todos__button" onClick={handleRemoveCompleted}>
                Remove completed tasks
              </button>
            </header>
          )}

          <RenderTodoList
            className="completed"
            todos={completeTodos}
            handleRemoveItem={handleRemoveItem}
          />
        </React.Fragment>
      ) : (
        <div className="TodoList__empty">
          <span role="img" aria-label="Rolling eyes emoji">
            🙄
          </span>{" "}
          You have nothing to do yet...
        </div>
      )}
    </div>
  );
};

const RenderTodoList = ({ todos = [], handleRemoveItem, className = "" }) => {
  const listCx = cx("TodoList__list", className);

  return (
    <ul className={listCx}>
      {todos.map(todo => {
        return (
          <li
            className="TodoList__item"
            key={todo.id}
            id={todo.id}
            onClick={handleRemoveItem}
            completed={todo.completed.toString()}
          >
            <UICheckbox
              label={todo.todo}
              id={`todo-${todo.id}-input`}
              defaultChecked={todo.completed}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
