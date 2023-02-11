import React , { useState, useEffect } from 'react';
import { Task } from './../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    const [tasks, setTasks] = useState(defaultTask)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      console.log('Task State has been modified');
      setLoading(false);
      return () => {
        console.log('Tasklist component is going to unmount');
      }
    }, [tasks])
    

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaultTask} />
        </div>
    );
}

export default TaskListComponent;
