import React from 'react'

function TodoForm({setTodos, setTask, task, todos}) {

    //const [task, setTask] = React.useState({desc: "", isFinish: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("tâche ajoutée :", task);
        setTodos([...todos, task]);
        setTask({desc: "", isFinish: false});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type ="texte"
                value={task.desc}
                onChange={(e) => setTask({desc: e.target.value, isFinish: false})}>
            </input>
            <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default TodoForm