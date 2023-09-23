import { useState } from 'react';
import { Header } from './components/Header/Header';
import { NewTask } from './components/NewTask/NewTask';
import { TaskList } from './components/TaskList/TaskList';

import styles from './App.module.css';
import '../assets/styles/global.css';
import { TaskType } from './components/Task/Task';



export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function addNewTask(taskName: string) {
    setTasks([{
      id: self.crypto.randomUUID(),
      name: taskName,
      done: false,
    }, ...tasks]);
  }

  function changeTaskStatus(taskToBeModified: TaskType) {
    const modifiedTasksArray = tasks.map(task => {
      if (task.id === taskToBeModified.id) {
        return taskToBeModified;
      }

      return task;
    });

    setTasks(modifiedTasksArray);
  }

  function deleteExistingTask(taskToBeDeleted: TaskType) {
    const filteredTasks = tasks.filter(task => taskToBeDeleted.id !== task.id);

    setTasks(filteredTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onNewTaskSubmit={addNewTask}/>
        <TaskList tasks={tasks} onDeleteTask={deleteExistingTask} onTaskStatusChange={changeTaskStatus}/>
      </div>
    </>
  )
}
