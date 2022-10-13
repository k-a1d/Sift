import React, { Component } from "react";
import "../assets/styles/styles.css";

class GoalEntry extends Component {
  state = {};
  render() {
    return (
      <div
        id="goalEntryDiv"
        className="h-48 grid place-items-center content-center"
      >
        <div>
          <form
            action=""
            className="text-center block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="mb-4">
              <label
                for="goal"
                className="text-2xl font-bold text-gray-900 dark:text-white "
              >
                Please enter a goal:
              </label>
            </div>
            <div>
              <input
                type="text"
                id="goal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Goal here..."
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default GoalEntry;
