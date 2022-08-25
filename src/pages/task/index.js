import { useReducer, useState } from "react"

import styles from "./index.module.css"

const Tasks = () => {
      const initialTasks = [""]

    const taskReducer = (state, action) => {
        switch(action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                };

                setTaskText("")

                return [...state, newTask];

            case "DELETE":
                return state.filter((task) => task.id !== action.id);
            
            default:
                return state;
        }
    };

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({type: "ADD" });
    };

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id});
    }


  return (
    <div className={styles.container}>
        <h2>Tarefas</h2>
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
        ))}
        <form onSubmit={handleSubmit} className={styles.input__task}>
            <input type="text" 
            onChange={(e) => setTaskText(e.target.value)} 
            value={taskText} 
            />
            <input type="submit" value="Salvar Tarefa" className={styles.btn__input} />
        </form>
        
    </div>
  )
}

export default Tasks