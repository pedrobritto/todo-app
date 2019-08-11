import React from "react";

const TodoInput = props => {
  const { handleInput, inputValue, handleSubmit } = props;

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
        <button type="submit" className="TodoInput__button" onClick={handleSubmit}>
          Add new todo
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
