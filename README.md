Oi, Bibinha! :)

Escrevi essa introdução pra te explciar como as coisas funcionam na minha área e mostrar um pouco da natureza do meu trabalho na oowlish.

---

Esse código é escrito na linguagem JavaScript e estou utilizando como
base pra facilitar o desenvolvimento de tudo o React. React é uma
biblioteca (lib, para os íntimos) e isso quer dizer que é um código
escrito por outras pessoas que contém funcionalidades próprias mas que
podem ser utilizadas por outras pessoas.

O React, no caso, é uma lib para ajudar no desenvolvimento de interfaces,
ou seja, basicamente tudo que você e faz no site.

Ele usa um esquema muito bom de componentização de elementos, então
tudo por aqui acaba se tornando um componente ou pedaço, independente de
outros ou não. Você pode ver os componentes aqui como qualquer elemento que
apareça entre `< >` e que a primeira letra seja maiúscula. Se a letra for minúscula, quer dizer que é só um elemento `HTML` comum.

Por exemplo, no arquivo `src/components/TodoContainer.jsx`, lá em baixo, existem duas linhas com `<TodoInput />` e `<TodoList />` escritas, e ambos
são componentes! Componentes existem em um arquivo próprio e tudo que ele precisa para funcionar está lá mesmo ou pode ser recebido de um componente pai, o que reduz a bagunça e facilita o programador a manter a sua sanidade.

(Componentes pai são componentes que contém outros componentes dentro de sí. Seguindo a mesma lógica existem os componentes filhos.)

Inclusive, o arquivo `TodoContainer.jsx` também contém o componente!

```jsx
// Trecho do arquivo src/components/TodoContainer.jsx
const TodoContainer = () => {
  // ...
};
```

Vê o nome lá em cima? `TodoContainer` é uma função que contém todo o código
que eu preciso. Lá no final tem uma linha escrito o seguinte:

```js
export default TodoContainer;
```

Ela que exporta esse componente para que ele possa ser utilizado em outros
arquivos. Todos os componentes tem esse "export default" para serem utilizados!

---

Sobre a lógica do negócio, eu crio uma lista de objetos e neles eu coloco
os dados que eu preciso guardar. No caso, um identificador, o texto do item e
se ele está marcado ou não.

Isso fica guardado assim:

```js
const listaDeObjetos = [
  {
    id: "1",
    todo: "Do the dishes",
    completed: false
  }
];
```

O `[]` indica um array ou lista de itens, sempre separados por vírgula, e `{}` é um objeto, às vezes chamado de dicionário. Objetos são tipo uma listagem também, mas de associação de valores. No exemplo existe `id: "1565897281457"`. O campo `id` é uma chave, enquanto o número é o valor associado aquela chave, o que me permite acessar todos esses dados. É como se o `id` fosse uma palavra no dicionário e o seu valor associado fosse a explicação daquela palavra.

se eu tiver vários itens dentro da minha lista, ficaria algo assim:

```js
const listaDeObjetos = [{...}, {...}, {...}];
```

E é isso que armazena todos os meus To-dos. :)

Pra fazer o aplicativo funcionar, preciso acessar essa lista de alguma forma, tanto para saber o que tem dentro dela quanto para poder adicionar coisas nela. Para isso crio algumas funções para realizar essas operações e manter tudo em ordem.

Sabe os dois componentes que falei acima, `<TodoInput />` e `<TodoList />`?

`<TodoInput />` é contém um campo de texto e um botão, e sua função é criar um novo item dentro desse objeto que armazena tudo! Sempre que algo é digitado e o botão é pressionado, ele cria um pequeno objeto o coloca dentro da lista de objetos.

Já o `<TodoList />` tem a função de exibir todos os To-dos, permite que eles sejam marcados como completos e deletados.

Mas para ambos fazerem isso, precisam ter acesso a lista de To-dos, mas ela não pertence a nenhum deles, e sim ao `<TodoContainer />`. Ele é um componente com `state`, que é o nome utilizado para se referir a dados que são armazenados e utilizados pelos componentes.

Como isso funciona então? Através das `props` (nome curto para "properties") eu posso enviar a um componente filho os dados do pai, e eles podem tanto ler como escrever novos dados através disso.

Se eu quiser passar a lista de objetos para `<TodoList />`, eu faço assim:

```js
<TodoList nomeDoProp={listaDeObjetos} />
```

Assim o `<TodoList />` vai conseguir acessar dentro dele o valor de `listaDeObjetos` através do nome `nomeDoProp`, que é realmente só o nome utilizado para identificar tudo que tem dentro de `listaDeObjetos`.

Acredito que escrevi demais, já. Coloquei alguns comentários explicando trechos de código individuais nos arquivos:

- [TodoContainer](https://github.com/pedrobritto/todo-app/blob/bibinha/src/components/TodoContainer/index.jsx)
- [TodoInput](https://github.com/pedrobritto/todo-app/blob/bibinha/src/components/TodoInput/index.jsx)
