import React from "react";
import Modal from "../modal/Modal";
import { useTodos } from "../../store/todos";
import "./TodoList.css";

interface TodoListProps {
  open: boolean;
  onClose: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ open, onClose }) => {
  const { todos, setTodos } = useTodos();

  const toggleTodo = (id: number, completed: boolean) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed,
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
              key={todo.id}
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleTodo(todo.id, !todo.completed)}
            >
              <div className="todo-text">{todo.text}</div>
              {todo.description && (
                <div className="todo-description">{todo.description}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default TodoList;