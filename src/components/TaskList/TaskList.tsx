import { ClipboardText } from 'phosphor-react';
import { Task, TaskType } from '../Task/Task';
import styles from './TaskList.module.css';

interface TaskListProps {
    tasks: TaskType[];
    onDeleteTask: (task: TaskType) => void;
    onTaskStatusChange: (task: TaskType) => void;
}

export function TaskList({ tasks, onDeleteTask, onTaskStatusChange }: TaskListProps) {
    const doneTasksAmount = tasks.filter(task => task.done).length;
    const isTaskArrayEmpty = tasks.length === 0;

    return (
        <main className={styles.taskList}>
            <header>
                <div className={styles.createdTasks}>
                    <p>Tarefas Criadas</p>
                    <span className={styles.taskCounter}>{tasks.length}</span>
                </div>
                <div className={styles.completedTasks}>
                    <p>Concluídas</p>
                    <span className={styles.taskCounter}>{doneTasksAmount}</span>
                </div>
            </header>
            {isTaskArrayEmpty ? <EmptyTaskList /> : tasks.map(task => <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onTaskStatusChange={onTaskStatusChange} />)}
        </main>
    );
}

function EmptyTaskList() {
    return (
        <div className={styles.emptyTaskList}>
            <ClipboardText size={56} />
            <span className={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</span>
            <span className={styles.emptySubtitle}>Crie tarefas e organize seus itens a fazer</span>
        </div>
    );
}