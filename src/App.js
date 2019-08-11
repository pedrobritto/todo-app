import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import TodoContainer from "components/TodoContainer";

library.add(faCheck);

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
