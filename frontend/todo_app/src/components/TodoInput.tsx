import { useState } from "react"

interface AddtodoProps {
  onAddTodo: (text: string) => void
}

export const TodoInput: React.FC<AddtodoProps> = ({onAddTodo}) => {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (!todo.trim()) return;
    onAddTodo(todo);
    setTodo("");
  }

  return (
    <>
      <input 
        placeholder='Add a todo' 
        className='text-lg border rounded-md px-2 py-1 flex-1' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            addTodo();
          }
        }}
      /> 
      <button className='bg-black text-white rounded-md px-4 whitespace-nowrap cursor-pointer' onClick={addTodo}>Add Todo</button>
    </>
  )
}