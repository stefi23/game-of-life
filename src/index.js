import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

class Main extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    (this.rows = 30), (this.cols = 50);
    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Arrray(this.cols).fill(false)),
    };
  }

  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

class Grid extends React.Component {
  render() {
    const width = this.prop.cols * 14;
    const rowsArr = [];
    let boxClass = "";

    for (let i = 0; 0 < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        let boxId = i + "_" + j;
        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }
    return (
      <div className="grid" style={{ width: width }}>
        {{ rowsArr }}
      </div>
    );
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
