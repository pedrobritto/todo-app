import React from "react";
import TodoContainer from "components/TodoContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <span role="img" aria-label="Note emoji">
            📝
          </span>{" "}
          Todo App
        </h1>

        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
