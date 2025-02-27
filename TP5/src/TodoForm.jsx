import React from 'react'

function TodoForm({setTodos, setTask, task, todos}) {

    //const [task, setTask] = React.useState({desc: "", isFinish: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, task]);
        setTask({desc: "", isFinish: false});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                className='sm:border-1 md:border-2 lg:border-3 border-solid bg-amber-300/50'
                type ="texte"
                value={task.desc}
                onChange={(e) => setTask({desc: e.target.value, isFinish: false})}>
            </input>
            <button type="submit" className='bg-blue-400 hover:bg-blue-600 text-white rounded-xl p-1 border-3'>Ajouter</button>
            </form>
        </div>
    )
}

export default TodoForm