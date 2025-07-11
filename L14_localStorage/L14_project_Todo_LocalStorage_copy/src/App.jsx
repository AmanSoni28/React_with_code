import { useEffect, useState } from 'react'
import { TodoContext } from './contexts/TodoContext'
import TodoForm from './conponents/TodoForm'
import TodoItem from './conponents/TodoItem'

function App() {
const [todos,setTodos] = useState([])

const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo])
}

const updateTodo = (id,todo)=>{  
  setTodos((prev)=>prev.map((prevTodo)=> (prevTodo.id===id) ? todo : prevTodo) )     //ternary operator, if id match then todo else prevTodo
}

const deleteTodo = (id) => {
  setTodos((prev)=>prev.filter((prevTodo)=> prevTodo.id!=id ))                     //filter all todo except (prevTodo.id!=id)
}

const toggleMark = (id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>
    (prevTodo.id===id) ? {...prevTodo, mark: !prevTodo.mark} : prevTodo))       //if id mtach all are same but mark rewrite mark:!prevTodo.mark
}

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))              //getItem using key, gives value in string form then convert in json
  if(todos && todos.length>0)
       setTodos(todos)
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))                 //setItem key="todos",value=todos, localStorage takes value in string form
},[todos])

  return (
  <TodoContext.Provider   value={{todos, addTodo, deleteTodo, updateTodo, toggleMark}} >
 <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                     {/*Loop and Add TodoItem here */}
                     {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                      ))}
                    </div>
                </div>
            </div>
  </TodoContext.Provider>
  )
}

export default App


/*<+++++++++++++++++++++++++++++++++ Notes +++++++++++++++++++++++++++++++++++++++>
📝 What is localStorage?
It is a built-in browser storage that lets you store data in the user's browser.
The data is saved even if you close or refresh the page (unlike temporary memory).

💡 Key Points:
Feature	                     Details
Storage Type	            Key-Value pairs (like a dictionary)
Storage Limit	            About 5 MB per website
Lifespan	                Until the user manually clears browser storage

🛠 How to Use localStorage in React:
1.Set Item (Save data):
localStorage.setItem('key', 'value')
Example:
localStorage.setItem('username', 'Aman');

2.Get Item (Read data):
const name = localStorage.getItem('username');
console.log(name);  // Output: Aman

3.Remove Item:
localStorage.removeItem('username');

4.Clear All Storage:
localStorage.clear();                                   */