import React from 'react'

function TodoItem({setTodos, todos, todo}) {

    const handleTodosChange = (e) => {
        let newValue = e.isFinish ? false : true;
        setTodos(todos.map(todo =>
          todo.desc == e.desc ? { ...todo, isFinish: newValue } : todo
        ));
      }


    return (
        <div className={`${todo.isFinish ? "bg-stone-400 hover:bg-stone-600" : "bg-slate-100 hover:bg-slate-300"} card border-1 border-solid drop-shadow-cyan-500/50 m-2 bg-slate-100`} >
          <li className={`${todo.isFinish ? "checked" : ""} sm:ml-1 md:ml-2 lg:ml-3 sm:mr-1 md:mr-2 lg:mr-3`}>
            <input 
            type="checkbox"
            onChange={() => handleTodosChange(todo)}>
            </input>
            <span className='p-2'>{todo.desc}</span>
            <button onClick={() => setTodos(todos.filter(task => task.desc !== todo.desc))} className='bg-red-400 hover:bg-red-600 text-white rounded-xl p-1 border-3'>Supprimer</button> 
          </li> 
        </div>
    )
}

export default TodoItem