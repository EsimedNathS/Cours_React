import React from 'react'
import './App.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [task, setTask] = React.useState({desc: "", isFinish: false});
  const [todos, setTodos] = React.useState([]);

  return (
    <>
      <div className='flex justify-center items-center h-screen flex-col'>
        <TodoForm setTodos={setTodos} setTask={setTask} task={task} todos={todos}></TodoForm>
        <br></br>
        <TodoList setTodos={setTodos} todos={todos}></TodoList>
      </div>
    </>
  )
}

export default App
