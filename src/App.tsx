import Search from "./components/search/Search";
import Users from "./modules/Users";
import { useState } from "react";
import TodoList from "./components/todos/TodoList";
import "./styles.css";
import FloatingButton from "./components/button/FloatingButton";
import { TodosProvider } from "./store/todos";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [todosOpen, setTodosOpen] = useState(false);

  return (
    <TodosProvider>
      <div className="App">
        <TodoList open={todosOpen} onClose={() => setTodosOpen(false)}/>
        <Search search={search} setSearch={setSearch} />
        <Users search={search} />
        <FloatingButton onClick={() => setTodosOpen(true)} position="bottom-right" >+</FloatingButton>
      </div>
    </TodosProvider>
  );
}
