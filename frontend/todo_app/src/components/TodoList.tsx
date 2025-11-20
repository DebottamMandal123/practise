import React from 'react'
import type { TodosProps } from '../utils/TodosProps'
import { Trash2 } from 'lucide-react'

interface TodoListProps {
    todos: TodosProps[],
    onToggleTodo: (id: string) => void,
    onDeleteTodo: (id: string) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-x-8 w-full">
            <div className={`text-2xl ${item.completed ? 'line-through text-gray-400' : ''}`}>
                {item.todo}
            </div>
            <div className='flex items-center gap-x-2'>
                <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => onToggleTodo(item.id)}
                    className="cursor-pointer w-5 h-5 mt-0.5"
                />
                <Trash2 onClick={() => onDeleteTodo(item.id)} className='cursor-pointer' />
            </div>
        </div>
      ))}
    </div>
  )
}