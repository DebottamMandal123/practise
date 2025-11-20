import { useState } from "react";
import { TodoItem } from "./components/TodoItem"

interface TodoProps {
    id: number,
    text: string, 
    completed: boolean 
}

function App() {
    const [todo, setTodos] = useState<TodoProps>();

  return (
    <div className="flex min-h-screen justify-center items-center">
      <TodoItem />
    </div>
  )
}

export default App