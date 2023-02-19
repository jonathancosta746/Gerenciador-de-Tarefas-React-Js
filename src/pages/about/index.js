import styles from './index.module.css';

import { Link } from 'react-router-dom';

import logo from "../../images/logo.png"


const About = () => {
  return (
    <div className={styles.about}>
      <img src={logo} alt="To-do List" />
      <h1>Sobre o Gerenciador de Tarefas</h1>
      <p>Este projeto consiste em um gerenciador de tarefas criado utilizando React no front-end e Firebase em seu back-end.</p>
        <Link to="/" className='btn'>Salvar Tarefa</Link>
    </div>
  )
}

export default About