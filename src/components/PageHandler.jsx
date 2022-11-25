import React, { Component } from "react";
import GoalEntry from "./GoalEntry";
import DateEntry from "./DateEntry";
import "../assets/styles/styles.css";

<script src="https://unpkg.com/flowbite@1.5.4/dist/datepicker.js"></script>

class PageHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: "Default goal",
      goalSubmitted: false,
    };

    this.submitGoal = this.submitGoal.bind(this);
    this.render = this.render.bind(this);
  }

  submitGoal(goal) {
    this.setState({ goal: goal }, () => {
      console.log("Goal:", this.state.goal);
    });

    this.setState({ goalSubmitted: true }, () => {
      console.log(this.state.goalSubmitted);
    });
  }

  render() {
    if (this.state.goalSubmitted) {
      return <DateEntry />;
    }
    return <GoalEntry submitGoal={this.submitGoal} />;
  }
}

export default PageHandler;
