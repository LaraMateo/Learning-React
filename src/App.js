import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something" }, [
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, { name: "Fito", animal: "Dog", breed: "Afador" }),
    React.createElement(Pet, {
      name: "Martin",
      animal: "Dog",
      breed: "Beagle",
    }),
    React.createElement(Pet, {
      name: "Riko",
      animal: "Dog",
      breed: "Border Collie",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
