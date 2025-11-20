export const TodoItem: React.FC = () => {

  return (
    <div className='flex gap-2'>
      <input placeholder='Add a todo' className='text-lg border rounded-md px-2 py-1 w-2xs' /> 
      <button className='bg-black text-white rounded-md px-2 cursor-pointer'>Add Todo</button>
    </div>
  )
}