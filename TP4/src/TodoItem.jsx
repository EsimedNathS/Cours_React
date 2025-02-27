import React from 'react'

function TodoItem({setTodos, todos, todo}) {

    const handleTodosChange = (e) => {
        let newValue = e.isFinish ? false : true;
        setTodos(todos.map(todo =>
          todo.desc == e.desc ? { ...todo, isFinish: newValue } : todo
        ));
      }


    return (
        <li className={todo.isFinish ? "checked" : ""}>
            <input 
            type="checkbox"
            onChange={() => handleTodosChange(todo)}>
            </input>
            {todo.desc} 
            <button onClick={() => setTodos(todos.filter(task => task.desc !== todo.desc))}>Supprimer</button> 
        </li> 
    )
}

export default TodoItem