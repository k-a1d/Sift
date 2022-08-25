import React, { Component } from 'react';

class GoalEntry extends Component {
    state = {  } 
    render() { 
        return (
            <div id="goalEntryDiv">
                <form action="">
                    <label for="goal">Please enter a goal:</label>
                    <input type="text" id="goal">
                    </input>
                </form>
            </div>
        );
    }
}
 
export default GoalEntry;