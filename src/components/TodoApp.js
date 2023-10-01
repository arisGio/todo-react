import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  /**
   * Handles new form input
   * @param {*} todoText
   */
  const handleAddTodo = (todoText) => {
    const newTodo = { id: Date.now(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  /**
   * Handles complete action from user
   * @param {*} todoId
   */
  const handleCompleteTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  /**
   * Handles removal of todo item
   * @param {*} todoId
   */
  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleteTodo={handleCompleteTodo}
            onRemoveTodo={handleRemoveTodo}
          />
        ))}
        <TodoForm onAddTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default TodoApp;
