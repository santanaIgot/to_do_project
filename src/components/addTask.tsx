import { useState } from 'react'
import styles from './addTask.module.css'
import { ChangeEvent } from 'react';


export function AddTask() {
    const [task, setTask ] = useState('');
    const [tasks, setTasks ] = useState(['']);

    function handleAddTask() { 
        
        setTasks([...tasks, task]);
        //apos adicionar 
        //estado que armazena tarefas 
        setTask('');
    }

    function handleNewAddTask(event:ChangeEvent<HTMLTextAreaElement>) {
        console.log('teste');

        setTask(event.target.value);
        
    }
    return(
       <>
        <div className={styles.newTask}>
            <textarea 
                className={styles.input} 
                placeholder='ADICIONE UMA NOVA TAREFA'
                value={task}
                onChange={handleNewAddTask}
            />
            <button onClick={handleAddTask} className={styles.button}>criar nova tarefa</button>
        </div>

        <div className="">
            {
                tasks.map( (event, i) => {
                    return <h1 key={i}>{event}</h1>
                })
            }
        </div>
       </>
            
    )
}