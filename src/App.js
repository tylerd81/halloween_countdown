import React, { Component } from "react";
import Header from "./components/Header";
import HalloweenTimer from "./components/HalloweenTimer";
import HalloweenBackground from "./components/HalloweenBackground";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HalloweenBackground>
          <Header />
          <HalloweenTimer />
        </HalloweenBackground>
      </div>
    );
  }
}

export default App;
