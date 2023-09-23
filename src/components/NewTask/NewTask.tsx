import { ChangeEvent, InvalidEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

interface NewTaskProps {
    onNewTaskSubmit: (taskName: string) => void;
}

export function NewTask({ onNewTaskSubmit }: NewTaskProps) {
    const [taskName, setTaskName] = useState('');

    function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setTaskName(event.target.value);
    }

    function handleInvalidTaskName(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        onNewTaskSubmit(taskName);
        setTaskName('');
    }

    const isNewTaskTextEmpty = taskName.length === 0;

    return (
        <form onSubmit={handleFormSubmit} className={styles.newTask}>
            <input
                placeholder="Adicione uma nova tarefa"
                value={taskName}
                onChange={handleTaskChange}
                onInvalid={handleInvalidTaskName}
                required />
            <button type="submit" disabled={isNewTaskTextEmpty}>
                <span>Criar</span>
                <PlusCircle size={20}/>
            </button>
        </form>
    );
}