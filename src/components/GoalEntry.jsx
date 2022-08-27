import React, { Component } from "react";
import "../styles/styles.css";

class GoalEntry extends Component {
  state = {};
  render() {
    return (
      <div id="goalEntryDiv" className="h-48 grid grid-cols-2 place-items-center content-center">
        <div>
          <form action="" className="text-center">
            <label for="goal">Please enter a goal:</label>
            <br></br>
            <input type="text" id="goal" className="rounded-lg"></input>
          </form>
        </div>
        <div>
          <form action="" className="text-center">
            <label for="goalDate">
              When would you like to achieve this goal by?
            </label>
            <br></br>
            <input type="text" id="goalDate" className="rounded-lg"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default GoalEntry;
