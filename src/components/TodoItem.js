import React from "react";

function TodoItem(props) {
  const { todo, onCompleteTodo, onRemoveTodo } = props;

  return (
    <div className={`singleTodoItem ${todo.completed ? "completed" : ""}`}>
      <div>
        <button
          className="markCompleteTodoItem"
          onClick={() => onCompleteTodo(todo.id)}
        >
          {todo.completed ? <span>&#x2714;</span> : <span>&#x25FB;</span>}
        </button>
        <button
          className="removeTodoItem"
          onClick={() => onRemoveTodo(todo.id)}
        >
          X
        </button>
      </div>
      <div className="todoText">{todo.text}</div>
    </div>
  );
}
export default TodoItem;
