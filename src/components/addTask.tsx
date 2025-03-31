import { useState, ChangeEvent } from "react";
import styles from "./addTask.module.css";
import { TaskItem } from "./taskItem";

import img from "../image/Clipboard.png";

interface TaskType {
  id: number;
  content: string;
}

export function AddTask() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [countTask, setCountTask] = useState(0);

  function handleAddTask() {
    if (task.trim() === "") return; // Evita adicionar tarefas vazias

    const newTask: TaskType = {
      id: Date.now(), // Usa timestamp como ID único
      content: task,
    };

    setTasks([...tasks, newTask]);
    setTask(""); // Limpa o input
    setCountTask(countTask + 1);
  }

  function handleNewAddTask(event: ChangeEvent<HTMLTextAreaElement>) {
    setTask(event.target.value);
  }

  return (
    <>
      <div className={styles.taskContainer}>
        <div className={styles.newTask}>
          <textarea
            className={styles.input}
            placeholder="ADICIONE UMA NOVA TAREFA"
            value={task}
            onChange={handleNewAddTask}
          />
          <button onClick={handleAddTask} className={styles.button}>
            Criar nova tarefa
          </button>
        </div>

        <div className={styles.task}>
          <div className={styles.border}>
            <div className={styles.taskCount}>
              <p className={styles.created}>
                Tarefas criadas <span>{countTask}</span>
              </p>
              <p className={styles.created}>Concluídas</p>
            </div>
          </div>
          <div className={styles.taskEmpty}>
            <img src={img} alt="" className={styles.img} />
            <p className={styles.p}>Você ainda não tem tarefas cadastradas.</p>
            <p className={styles.p}>
              Crie tarefas e organize seus intens a fazer
            </p>
          </div>

          {tasks.map((task) => (
            <TaskItem key={task.id} content={task.content} />
          ))}
        </div>
      </div>
    </>
  );
}
