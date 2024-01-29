import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className="flex items-center justify-center mt-12">
  <input
    type="text"
    className="border border-gray-300 focus:outline-none focus:ring focus:border-indigo-500 rounded-l-md py-2 px-4 w-64 text-gray-700 leading-tight"
    placeholder="Enter a Todo..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button
    type="submit"
    className="bg-indigo-500 text-white py-2 px-6 rounded-r-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-500"
  >
    Add Todo
  </button>
</form>

  )
}

export default AddTodo