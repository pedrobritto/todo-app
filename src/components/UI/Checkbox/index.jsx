import React from "react";

import "./style.scss";

const UICheckbox = props => {
  const { label, id, defaultChecked } = props;

  return (
    <div className="CheckboxContainer">
      <input
        className="CheckboxInput TodoList__input"
        id={id}
        type="checkbox"
        defaultChecked={defaultChecked}
      />

      {label && (
        <label className="CheckboxLabel TodoList__label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default UICheckbox;
