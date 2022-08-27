import styles from "./index.module.css"

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

//Material Design
import ClearSharpIcon from '@mui/icons-material/ClearSharp';


const Tasks = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: tasks} = useFetchDocuments("tasks", null, uid);

  const {deleteDocument} = useDeleteDocument("tasks");

  console.log(tasks)



  return (
    <div className={styles.dashboard}>
      
      {tasks && tasks.length === 0 ? (
        <div className={styles.notask}>
          <p>Salve suas tarefas</p>
        </div>
      ) : (
        <p>Estas são suas tarefas</p>
      )}

      {tasks &&
        tasks.map((task) => (
          <div className={styles.task_row} key={task.id}>
            <p>{task.title}</p>
            <div className={styles.actions}>
              <button
                onClick={() => deleteDocument(task.id)}
                className={styles.btn__delete}
              >
                <ClearSharpIcon />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Tasks;