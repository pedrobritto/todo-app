import React from "react";

const TodoInput = props => {
  const { handleInput, inputValue, handleSubmit, resetTodos } = props;

  return (
    <div className="TodoInput__container">
      <form action="">
        <input
          className="TodoInput__input"
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="What you want to do now?"
        />

        <div>
          <button type="submit" className="TodoInput__button" onClick={handleSubmit}>
            Add new todo
          </button>
        </div>

        <div>
          <button type="button" className="TodoInput__clean-button" onClick={resetTodos}>
            Clean Todos
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
