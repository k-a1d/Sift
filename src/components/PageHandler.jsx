import React, { Component } from "react";
import GoalTips from "./goals/GoalTips";
import GoalEntry from "./goals/GoalEntry";
import DateEntry from "./goals/DateEntry";
import "../assets/styles/styles.css";

class PageHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: "Default goal",
      goalSubmitted: false,
      pageMap: new Map([
        ["GoalTips", 1],
        ["GoalEntry", 2],
        ["DateEntry", 3],
      ])
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
    //Create a hashmap for each component, so that we can identify which to render
    //once the "next" button is pressed on each page, send a signal here to render the next page

    return <GoalTips />
    
    // if (this.state.goalSubmitted) {
    //   return <DateEntry />;
    // }
    // return <GoalEntry submitGoal={this.submitGoal} />;
  }
}

export default PageHandler;
