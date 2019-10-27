import React from "react";

import Sketch from "./Sketch";

import MainImg from "./img/Toha.jpg";
import MapImg from "./img/Toha-map.jpg";

import "./index.css";

class App extends React.Component {
  componentDidMount() {
    new Sketch(MainImg, MapImg);
  }

  render() {
    return (
      <div className="frame">
        <div id="gl" />
      </div>
    );
  }
}

export default App;
