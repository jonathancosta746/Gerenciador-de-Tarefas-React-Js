import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {

  return (
    <nav className={styles.navbar}>
        <ul className={styles.links_list}>
            <li>
                <NavLink 
                  to="/" 
                  className={({isActive}) => (isActive ? styles.active : styles.no__active)}>Tarefas
                </NavLink>
            </li>
            <li>
                <NavLink 
                  to="/about" 
                  className={({isActive}) => (isActive ? styles.active : styles.no__active)}>Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default NavBar