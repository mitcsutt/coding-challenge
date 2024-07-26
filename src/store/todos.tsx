import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

// Define the shape of the todos
export interface Todo {
	id: number;
	text: string;
	description?: string;
	completed: boolean;
};

const defaultTodos: Pick<Todo, 'text' | 'description'>[] = [
	{ text: "1. User Cards 3X3 Grid", description: "The user grid should be a 3X3 grid. Use css to apply this" },
	{ text: "2. Debounce the search", description: "The search should be debounced by 500ms" },
	{ text: "3. Enhance the `User` type", description: "The User has different types based on their role. Enhance the type so that the conditional types are inferred by the role" },
	{ text: "4. Reduce unnecessary requests", description: "Hint: `api/users.ts` updates the state with each request. Consider a merge/diff or perhaps a request library (swr/react-query)" },
	{ text: "5. Keep previous results whilst searching", description: "The loader should be moved, and the previous results should remain whilst fetching. Style however you want" },
	{ text: "6. BONUS - Update the TODO state", description: "Update the TODO state to a state library package of your choice. Bonus points for using something you've never used" },
];

const createDefaultTodos = (todos: Pick<Todo, 'text' | 'description'>[]): Todo[] => {
	return todos.map((todo, index) => ({
		id: index,
		text: todo.text,
		description: todo.description,
		completed: false,
	}));
}

// Create the todos context
const TodosContext = createContext<{
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}>({
	todos: createDefaultTodos(defaultTodos),
	setTodos: () => { },
});

// Create the todos provider component
const TodosProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>(createDefaultTodos(defaultTodos));

	return (
		<TodosContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodosContext.Provider>
	);
};

// Create the useTodos hook
const useTodos = () => useContext(TodosContext);

export { TodosProvider, useTodos };