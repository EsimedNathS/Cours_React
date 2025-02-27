import React from 'react'
import TodoItem from './TodoItem';

function TodoList({setTodos, todos}) {

    return (
        <div className='m-2'>
            {todos?.length == 0 && <p className='text-red-500'>La liste est vide</p>}
            <ul>
                { todos?.map((todo,index) => {
                    return (
                        <TodoItem setTodos={setTodos} todos={todos} todo={todo} key={index}></TodoItem>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList