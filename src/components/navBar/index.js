import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

const NavBar = () => {

  const {user} = useAuthValue();
  const {logout} = useAuthentication();

  return (
    <nav className={styles.navbar}>
        <ul className={styles.links_list}>
            {!user && (
                <>
                    <li>
                        <NavLink 
                            to="/login"
                            className={({isActive}) => (isActive ? styles.active : styles.no__active)}
                                >Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/register"
                            className={({isActive}) => (isActive ? styles.active : styles.no__active)}
                                >Cadastrar
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                <li>
                    <NavLink 
                        to="/"
                        className={({isActive}) => (isActive ? styles.active : styles.no__active)}
                        >Tarefas
                    </NavLink>
                </li>
               
            </>
            )}
            <li>
                <NavLink 
                  to="/about" 
                  className={({isActive}) => (isActive ? styles.active : styles.no__active)}>Sobre
                </NavLink>
            </li>
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul>
    </nav>
  );
};

export default NavBar