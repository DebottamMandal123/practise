import { useState } from "react";
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList";
import type { TodosProps } from "./utils/TodosProps";

function App() {
  const [todos, setTodos] = useState<TodosProps[]>([]);

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
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </div>
  )
}

export default App