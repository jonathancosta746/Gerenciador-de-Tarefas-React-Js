import styles from "./index.module.css"


import { useState } from "react";

//hooks
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthValue } from "../../context/AuthContext";

//Material Design
import AddSharpIcon from '@mui/icons-material/AddSharp';


const CreateTask = () => {
  //inserir tarefa
  const [title, setTitle] = useState("");

  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("tasks");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    setTitle(""); //apagar letra apos utilizada


    // check values
    if (!title) {
      setFormError("Por favor, preencha todos os campos!");
    }


    if(formError) return

    insertDocument({
      title,
      uid: user.uid,
      createdBy: user.displayName,
    });

  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.input__task}>
        <label>
          <input 
            type="text" 
            name="title" 
            required 
            placeholder="Qual sua tarefa?"
            autoComplete="off"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>      
    
        {!response.loading && 
          <button
            type="submit"
            className={styles.btn__input}
          >
            <AddSharpIcon/>
          </button>}
        {response.loading && (
          
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreateTask