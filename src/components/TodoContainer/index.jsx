import React, { useState } from "react";

import "./style.scss";

import { initTodoStore, getStoreTodos, setStoreTodos } from "./helpers";

import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";

function TodoContainer() {
  initTodoStore();

  // Com essas variáveis eu consigo armazenar os valores
  // do campo de texto onde digita o nome do To-do (inputValue)
  // e da listagem de To-dos (todos).
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(getStoreTodos());

  // Essa função é utilizada para gravar dentro de `inputValue`
  // tudo que é digitado dentro do campo de texto.
  // Ali em cima eram só as variáveis. Aqui é uma função
  // que faz essa gravação.
  function handleInput(event) {
    const target = event.target;

    setInputValue(target.value);
  }

  // Essa função cria um novo To-do dentro da variável `todos` :)
  function handleSubmit(event) {
    event.preventDefault();

    // Se o campo de texto estiver vazio, não deixo criar um to-do
    if (inputValue === "") {
      return;
    }

    setInputValue("");

    // Aqui estou construindo o objeto com os novos dados para ser
    // adicionado na listagem geral de To-dos (`todos`)
    const updatedTodos = [
      ...todos,
      {
        id: String(Date.now()),
        todo: inputValue,
        completed: false
      }
    ];

    // E aqui estou de fato gravando o novo objeto dentro de `todos`.
    // Os nomes são bem sugestivos, então enquanto `todos` armazena os valores,
    // `setTodos` é uma função para gravar um novo valor.
    setTodos(updatedTodos);
    setStoreTodos(updatedTodos);
  }

  // Parece um pouco complicado, mas essa função serve apenas para mudar o
  // campo `completed` de verdadeiro para falso (ou vice-versa) quando a
  // caixinha é clicada.
  // Provavelmente poderia ser feita de maneira mais fácil :B
  function handleCheckItem(event) {
    const clickedItem = event.target.closest("li");
    const clickedItemId = clickedItem.id;
    const clickedTodoIndex = todos.findIndex(todo => todo.id === clickedItemId);
    const todosCopy = [...todos];

    todosCopy[clickedTodoIndex].completed = !todosCopy[clickedTodoIndex]
      .completed;
    setTodos(todosCopy);
    setStoreTodos(todosCopy);
  }

  // Essa função deleta todos os To-dos que estão marcados como completos.
  // Ela é executada quando "Remove completed tasks" é clicado!
  function handleRemoveCompleted() {
    const incompleteTodos = todos.filter(todo => !todo.completed);

    setTodos(incompleteTodos);
    setStoreTodos(incompleteTodos);
  }

  // Essa função remove itens individuais quando o X do lado do To-do é clicado.
  function handleRemoveClickedItem(event) {
    const clickedItem = event.target.closest("li");
    const clickedItemId = clickedItem.id;
    const remainingTodos = todos.filter(todo => todo.id !== clickedItemId);

    setTodos(remainingTodos);
    setStoreTodos(remainingTodos);
  }

  // O código acima é de funções e variáveis para fazer as coisas funcionarem.
  // Dentro desse return aqui que tudo que vai ser exibido na tela deve estar.
  return (
    <div className="TodoContainer">
      <h1 className="TodoContainer__title">
        <span role="img" aria-label="Note emoji">
          📝
        </span>{" "}
        Simple Todo App
      </h1>

      <TodoInput
        handleInput={handleInput}
        inputValue={inputValue}
        handleSubmit={handleSubmit}
      />

      <TodoList
        todos={todos}
        handleCheckItem={handleCheckItem}
        handleRemoveCompleted={handleRemoveCompleted}
        handleRemoveClickedItem={handleRemoveClickedItem}
      />
    </div>
  );
}

export default TodoContainer;
