import todoLogo from '../../../assets/images/todo-logo.svg';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="Ignite ToDo" />
        </header>
    );
}