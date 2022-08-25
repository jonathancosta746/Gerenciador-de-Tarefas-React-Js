import { useReducer, useState } from "react"


//css
import styles from "./index.module.css"

//Material Design
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

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
        {tasks.map((task) => (
            <li 
                key={task.id} 
                onDoubleClick={() => removeTask(task.id)}
            >

                {task.text} 
                
                <span onClick={() => removeTask(task.id)}>
                    <ClearSharpIcon className={styles.delete__btn}/>
                </span>

            </li>
        ))}

        <form onSubmit={handleSubmit} className={styles.input__task}>
            <input 
                type="text" 
                onChange={(e) => setTaskText(e.target.value)} 
                value={taskText} 
                placeholder="Qual sua tarefa?"
                autoComplete="off"
                required
            />

            <button
                type="submit"
                className={styles.btn__input}
            >
                    <AddSharpIcon/>
            </button>
           
        </form>
        
    </div>
  )
}

export default Tasks