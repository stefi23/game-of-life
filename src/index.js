import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      generation: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <Grid />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

class Grid extends React.Component {
  render() {
    return <div>Grid</div>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
