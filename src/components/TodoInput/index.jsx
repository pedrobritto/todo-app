import React from "react";

import "./style.scss";

const TodoInput = props => {
  // Essas são as props!
  // Os nome aqui são os mesmo que estão no componente pai :)
  const { handleInput, inputValue, handleSubmit } = props;

  // Aquele onChange={handleInput} quer dizer que sempre que o campo de texto
  // mudar, a função handleInput será executada.
  // Lembra que ela que atualizava o texto dentro da variável `inputValue`?
  // E la vem do componente pai mas é executada pelo filho.
  //
  // Outra coisa interessante é que o valor do campo de texto (value) também
  // vem do componente pai através da variável `inputValue`.
  //
  // Mais lá em baixo dentro de <button> tem onClick={handleSubmit}. Quer dizer
  // que quando o botão for clicado a função `handleSubmit` será executada.
  // Ela que cria um novo To-do!
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
          <button
            type="submit"
            className="TodoInput__button"
            onClick={handleSubmit}
          >
            Add new todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
