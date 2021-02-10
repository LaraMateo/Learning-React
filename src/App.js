import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.js";

const App = () => {
  return (
    <div id="something">
      <h1>Adopt Me!!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
