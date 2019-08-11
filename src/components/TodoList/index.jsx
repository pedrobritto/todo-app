import React from "react";
import UICheckbox from "components/UI/Checkbox";

const TodoList = props => {
  const { todos, handleRemoveItem } = props;

  const hasTodos = todos.length > 0;

  return (
    <div className="TodoList__container">
      {hasTodos ? (
        <ul className="TodoList__list">
          {todos.map(todo => {
            return (
              <li
                className="TodoList__item"
                key={todo.id}
                id={todo.id}
                onClick={handleRemoveItem}
                complete={todo.complete.toString()}
              >
                <UICheckbox label={todo.todo} id={`todo-${todo.id}-input`} />
              </li>
            );
          })}
        </ul>
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

export default TodoList;
