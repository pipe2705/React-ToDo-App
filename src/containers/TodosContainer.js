import React, { Component } from "react";
import TodoModel from "../models/Todo";
import Todos from "../components/Todos";
import CreateTodoForm from "../components/CreateTodoForm";

class TodosContainer extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    TodoModel.all().then(res => {
      this.setState({
        todos: res.todos
      });
    });
  };

  createTodo = todo => {
    let newTodo = {
      body: todo,
      completed: false
    };

    TodoModel.create(newTodo).then(res => {
      let todos = this.state.todos;
      todos.push(res);
      this.setState({ todos: todos });
    });
  };

  deleteTodo = todo => {
    TodoModel.delete(todo).then(data => {
      let todos = this.state.todos.filter(todo => {
        return todo._id !== data._id;
      });
    });
  };

  render() {
    return (
      <div className="todosComponent">
        <CreateTodoForm createTodo={this.createTodo} />

        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default TodosContainer;
