import React, { Component } from "react";

class DateEntry extends Component {
  handleSubmit = (e) => {
    alert("Form was submitted");
    e.preventDefault(); //Prevent default behaviour on form submit - refresh page
  };

  render() {
    return (
      <div
        id="goalDateDiv"
        className="h-48 grid place-items-center content-center"
      >
        <form
          action=""
          className="text-center block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
          onSubmit={this.handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="goal" className="text-2xl font-bold text-black">
              Date that goal should be achieved:
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-4 grid justify-center">
              <input
                type="text"
                id="goal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-5/6 focus:ring-blue-500 focus:border-blue-500 block px-5 p-1.5"
                placeholder="Month"
              ></input>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="goal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-5/6 focus:ring-blue-500 focus:border-blue-500 block px-5 p-1.5"
                placeholder="Year"
              ></input>
            </div>
          </div>
          <input
            type="submit"
            value="Next"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          ></input>
        </form>
      </div>
    );
  }
}

export default DateEntry;
