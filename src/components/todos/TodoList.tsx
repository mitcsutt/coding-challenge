import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import "./TodoList.css";

interface TodoListProps {
  initialTodos: string[];
  open: boolean;
  onClose: () => void;
}

const createInitialTodos = (initialTodos: string[]) =>
  initialTodos.map((todo) => {
    const savedRaw = localStorage.getItem("completedTodos");
    const saved: string[] = savedRaw ? JSON.parse(savedRaw) : [];
    return {
      complete: saved.includes(todo),
      label: todo,
    };
  });

const TodoList: React.FC<TodoListProps> = ({ initialTodos, open, onClose }) => {
  const [todos, setTodos] = useState(() => createInitialTodos(initialTodos));

  useEffect(() => {
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(
        todos.filter((todo) => todo.complete).map((todo) => todo.label)
      )
    );
  }, [todos]);

  const toggleTodo = (label: string, complete: boolean) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.label === label
          ? {
              ...todo,
              complete,
            }
          : todo
      )
    );
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="todo-list">
        <h1>ToDo List</h1>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.label}
              className={todo.complete ? "completed" : ""}
              onClick={() => toggleTodo(todo.label, !todo.complete)}
            >
              {todo.label}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default TodoList;