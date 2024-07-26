import Search from "./components/search/Search";
import Users from "./modules/Users";
import { useState } from "react";
import TodoList from "./components/todos/TodoList";
import "./styles.css";
import FloatingButton from "./components/button/FloatingButton";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [todosOpen, setTodosOpen] = useState(false);

  return (
    <div className="App">
      <TodoList initialTodos={todos} open={todosOpen} onClose={() => setTodosOpen(false)}/>
      <Search search={search} setSearch={setSearch} />
      <Users search={search} />
      <FloatingButton onClick={() => setTodosOpen(true)} position="bottom-right" >+</FloatingButton>
    </div>
  );
}

const todos = [
  "User Cards 3X3 Grid",
  "Fix User Search not fetching",
  "Debounce Search by 1000ms",
  "User Card border changes between rerenders",
  "User type to strictly type managerId by role",
  "Extract Todo's state into state management tool you haven't used before",
];
