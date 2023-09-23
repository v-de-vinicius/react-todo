import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
    task: TaskType;
    onDeleteTask: (task: TaskType) => void;
    onTaskStatusChange: (task: TaskType) => void;
}

export interface TaskType {
    id: string;
    name: string;
    done: boolean;
}

export function Task({ task, onDeleteTask, onTaskStatusChange }: TaskProps) {
    function handleTaskStatusChange() {
        onTaskStatusChange({
            id: task.id,
            name: task.name,
            done: !task.done
        });
    }

    function handleDeleteTask() {
        onDeleteTask(task);
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskInfo}>
                <label>
                    <input type="checkbox" checked={task.done} onChange={handleTaskStatusChange}/>
                    <span></span>
                </label>
                <span className={task.done ? styles.taskDoneText : styles.taskUndoneText}>{task.name}</span>
            </div>
            <button className={styles.deleteTask} title="Deletar tarefa" onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>
        </div>
    );
}