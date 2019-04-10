import React from "react";
import { connect } from "react-redux";
import "./TodoList.css";

import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addTodoItem = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  toggleItem = id => {
    // console.log(id);
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <>
        <h2>{this.props.normalProp}</h2>
        <div className="todo-list">
          {this.props.todos &&
            this.props.todos.map(todo => (
              <h3
                key={todo.id}
                onClick={() => this.toggleItem(todo.id)}
                className={todo.completed === true ? "toggleClass" : null}
              >
                {todo.task}
              </h3>
            ))}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="Add a new todo"
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodoItem}>Add Todo</button>
        <button>Clear</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);
