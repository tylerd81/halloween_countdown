import React, { Component } from "react";
import "./halloweentimer.css";

export default class HalloweenTimer extends Component {
  constructor() {
    super();

    const now = new Date();
    const halloweenDate = new Date(now.getFullYear(), 9, 31);

    const nowSeconds = Math.ceil(now.getTime() / 1000);
    const halloweenSeconds = Math.ceil(halloweenDate.getTime() / 1000);

    this.state = {
      timeTillHalloween: halloweenSeconds - nowSeconds
    };

    this.timer = setInterval(() => {
      let { timeTillHalloween } = this.state;
      timeTillHalloween -= 1;

      this.setState({
        ...this.state,
        timeTillHalloween
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Timer stopped");
  }

  render() {
    const { days, hours, minutes, seconds } = convertSecondsToDisplayTime(
      this.state.timeTillHalloween
    );
    return (
      <div className="timer-container">
        <h1 className="time-display">
          {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds
          until Halloween!
        </h1>
      </div>
    );
  }
}

function convertSecondsToDisplayTime(totalTime) {
  let seconds = totalTime % 60;
  totalTime = Math.floor(totalTime / 60);

  let minutes = totalTime % 60;
  totalTime = Math.floor(totalTime / 60);

  let hours = totalTime % 24;
  totalTime = Math.floor(totalTime / 24);

  let days = totalTime;

  return { days, hours, minutes, seconds };
}
