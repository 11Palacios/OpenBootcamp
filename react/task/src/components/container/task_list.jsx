import React , { useState, useEffect } from 'react';
import { Task } from './../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true)
    const [newName, setNewName] = useState(null)
    const [newDescription, setNewDescription]= useState(null)
    const [newPriority, setNewPriority] = useState(null)

    useEffect(() => {
      console.log('Task State has been modified');
      setLoading(false);
      return () => {
        console.log('Tasklist component is going to unmount');
      }
    }, [tasks])
    

    const completeTask = (task) => {
        console.log('complete this task',task)
        const newTasks = [...tasks]
        for(let i = 0; i < newTasks.length; i++){
            if (newTasks[i].name === task.name){
                if(newTasks[i].completed === true){
                    newTasks[i].completed = false
                }else{
                    newTasks[i].completed = true
                }
            }
        }
        setTasks(newTasks)
    }

    const eraseTask = (task) => {
        const newTasks = [...tasks]
        const filtered = newTasks.filter(t => t.name !== task.name)
        setTasks(filtered)
    }

    const handleNewName = (e) => {
        setNewName(e.target.value)
    }

    const handleNewDescription = (e) => {
        setNewDescription(e.target.value)
    }

    const handleNewPriority = (e) => {
        setNewPriority(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault()
        const newTask = new Task(newName, newDescription, false, newPriority)
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
        document.getElementById('inputName').value=''
        document.getElementById('inputDescription').value=''
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>   
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => { return (<TaskComponent task={task} key={index} completeTask={completeTask} eraseTask={eraseTask} addTask={addTask}/>)})}
                                
                            </tbody>
                        </table>
                    </div>
                    <TaskForm addTask={addTask} handleNewName={handleNewName} handleNewDescription={handleNewDescription} handleNewPriority={handleNewPriority}/>
                </div>
            </div>
        </div>
    );
}

export default TaskListComponent;
