import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
      <nav class = "flex justify-center">
        <a href="*" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Goals</a>
        <a href="*" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Tracking</a>
        <a href="*" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Calendar</a>
      </nav>
      </div>
    );
  }
}

export default Navbar;
