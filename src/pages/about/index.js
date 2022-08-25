import styles from './index.module.css';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Gerenciador de <span>Tarefas</span></h2>
        <p>Este projeto consiste em um gerenciador de tarefas criado utilizando React no front-end e utilizando o Firebase em seu back-end.</p>
        <Link to="/" className='btn'>Salvar Tarefa</Link>
    </div>
  )
}

export default About