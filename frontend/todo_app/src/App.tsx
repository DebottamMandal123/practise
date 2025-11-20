import { useState } from "react";
import { TodoInput } from "./components/TodoInput"

interface TodoProps {
    id: number,
    text: string, 
    completed: boolean 
}

function App() {
    const [, setTodos] = useState<TodoProps[]>([]);

    const addTodo = (text: string) => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      }
      setTodos(prev => [...prev, newTodo])
    }

  return (
    <div className="flex min-h-screen justify-center items-center">
      <TodoInput onAddTodo={addTodo} />
    </div>
  )
}

export default App