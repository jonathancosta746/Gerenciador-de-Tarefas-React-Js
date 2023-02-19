import styles from "./index.module.css"

import {useState, useEffect} from 'react';
import { useAuthentication } from "../../hooks/useAuthentication";

import logo from "../../images/logo.png"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {login, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {

    if(authError) {
      setError(authError);
    }

  }, [authError]);



  return (
    <div className={styles.login}>
        <img src={logo} alt="To-do List" />
        <h1>Iniciar sessão com seu e-mail</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </label>
          <label>
            <input 
              type="password" 
              name="password" 
              required 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </label>
          {!loading && <button className="btn">Entrar</button>}
          {loading && <button className="btn" disabled>Aguarde...</button>}
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login