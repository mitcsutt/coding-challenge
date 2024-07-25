import Grid from "./components/Grid";
import Search from "./components/Search";
import Users from "./modules/Users";
import { QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./config/queryClient";

export default function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TodoList initialTodos={todos} />
        <Search search={search} setSearch={setSearch} />
        <Users search={search} />
        <Grid />
      </div>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
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
