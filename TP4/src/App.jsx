import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function App() {
  const [task, setTask] = React.useState({desc: "", isFinish: false});
  const [todos, setTodos] = React.useState([]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <TodoForm setTodos={setTodos} setTask={setTask} task={task} todos={todos}></TodoForm>

      <br></br>

      <TodoList setTodos={setTodos} todos={todos}></TodoList>

    </>
  )
}

export default App
