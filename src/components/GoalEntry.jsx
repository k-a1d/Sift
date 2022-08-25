import React, { Component } from "react";
import "../styles/styles.css";

class GoalEntry extends Component {
  state = {};
  render() {
    return (
      <div id="goalEntryDiv" class="grid grid-cols-2 gap-4 place-items-center">
        <div>
          <form action="" class="text-center">
            <label for="goal">Please enter a goal:</label>
            <br></br>
            <input type="text" id="goal" class="rounded-lg"></input>
          </form>
        </div>
        <div>
          <form action="" class="text-center">
            <label for="goalDate">
              When would you like to achieve this goal by?
            </label>
            <br></br>
            <input type="text" id="goalDate" class="rounded-lg"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default GoalEntry;
