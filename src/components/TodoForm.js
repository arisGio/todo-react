import React, { useState } from "react";

function TodoForm(props) {
  const { onAddTodo } = props;
  const [todoText, setTodoText] = useState("");

  /**
   * Handles form submission for new item addition
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      onAddTodo(todoText.trim());
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="itemInput"
        placeholder="Add a new todo item"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="addItemButton">Add Item</button>
    </form>
  );
}

export default TodoForm;
