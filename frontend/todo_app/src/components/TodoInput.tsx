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
    <div className='flex gap-2'>
      <input 
        placeholder='Add a todo' 
        className='text-lg border rounded-md px-2 py-1 w-2xs' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      /> 
      <button className='bg-black text-white rounded-md px-2 cursor-pointer' onClick={addTodo}>Add Todo</button>
    </div>
  )
}