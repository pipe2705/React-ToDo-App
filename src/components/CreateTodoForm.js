import React, { Component } from "react";

class CreateTodoForm extends Component {
  state = {
    todo: ""
  };

  onInputChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.createTodo(todo);
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="taskForm">
          <input
            onChange={this.onInputChange}
            type="text"
            id="newItemDescription"
            placeholder="Type here to add to your to do List....."
            value={this.state.todo}
          />
          <button type="submit" id="addTask" className="btn">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default CreateTodoForm;
