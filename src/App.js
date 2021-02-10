import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="something">
      <h1>Adopt Me!!</h1>
      <Pet name="Fito" animal="Dog" breed="Afador" />
      <Pet name="Martin Caballero" animal="Dog" breed="Beagle" />
      <Pet name="Riko" animal="Dog" breed="Border Collie" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
