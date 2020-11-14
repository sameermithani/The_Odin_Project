import React, { Component } from "react";
import Overview from "./components/Overview"

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };

  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <input type="text" id="taskInput" onChange={this.handleChange} value={this.state.task}></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
