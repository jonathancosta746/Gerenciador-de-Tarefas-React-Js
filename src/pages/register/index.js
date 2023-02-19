import {useState, useEffect} from 'react';

import { useAuthentication } from "../../hooks/useAuthentication";

import logo from "../../images/logo.png"


import styles from "./index.module.css"

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    };

    
    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

    useEffect(() => {

      if(authError) {
        setError(authError);
      }
  
    }, [authError]);


  return (
    <div className={styles.register} >
        <img src={logo} alt="To-do List" />
        <h1>Crie seu usuário para salvar suas tarefas</h1>
        <form onSubmit={handleSubmit}>
          
          <label className={styles.nome}>
            <input 
              type="text" 
              name="displayName" 
              required 
              placeholder="Nome" 
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              />
          </label>
          <label  className={styles.email}>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </label>
          <label  className={styles.password}>
            <input 
              type="password" 
              name="password" 
              required 
              placeholder="Insira uma senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}             
              />
          </label>
          <label  className={styles.confirm_password}>
            <input 
              type="password" 
              name="confirmPassword" 
              required 
              placeholder="Confirme sua senha" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}          
              />
          </label>
          <div  className={styles.btn}>
            {!loading && <button className='btn' >Cadastrar</button>}
            {loading && <button disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
          </div>
        
        </form>
    </div>
  );
};

export default Register