import { useEffect, useState } from "react";
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList";
import type { TodosProps } from "./utils/TodosProps";

function App() {
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    setIsDataLoaded(true);
  }, [])

  useEffect(() => {
    if (!isDataLoaded) {
      return;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, isDataLoaded])

  const getfilteredTodos = () => {
    if (filter === "active") {
      return  todos.filter(todo => !todo.completed)
    }
    else if (filter === "completed") {
      return todos.filter(todo => todo.completed);
    }
    else {
      return todos;
    }
  }

  const filteredTodos = getfilteredTodos();

  const addTodo = (todo: string) => {
    const newTodo = {
      id: Date.now().toString(),
      todo,
      completed: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = (id: string) => {
    setTodos(prevtodos => 
      prevtodos.filter(todo => 
        todo.id !== id
      )
    )
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-y-6">
      <TodoInput onAddTodo={addTodo} />
      <div className="flex flex-row justify-between items-center w-2xs">
        <button className="cursor-pointer bg-black text-white rounded-md px-4 py-2" onClick={() => setFilter("all")}>All</button>
        <button className="cursor-pointer bg-black text-white rounded-md px-4 py-2" onClick={() => setFilter("active")}>Active</button>
        <button className="cursor-pointer bg-black text-white rounded-md px-4 py-2" onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </div>
  )
}

export default App