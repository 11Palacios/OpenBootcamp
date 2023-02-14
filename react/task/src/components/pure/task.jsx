import React , { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class';
import './../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, completeTask, eraseTask}) => {

  useEffect(() => {
    console.log('Created task')
  
    return () => {
      console.log(`Task : ${task.name} is going to unmount`)
    }
  }, [task])

  const taskLevelBadge = () =>{
    switch (task.level) {
      case LEVELS.NORMAL:
        return(<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>)
      case LEVELS.URGENT:
        return(<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>)
      case LEVELS.BLOCKING:
        return(<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>)
        default:
        break;
    }
  }

  const taskCompletedIcon = () => {
    return task.completed ? <i className='bi-toggle-on' style={{color:'green', fontWeight:'bold', cursor:'pointer'}}></i> : <i className='bi-toggle-off' style={{color:'grey', fontWeight:'bold', cursor:'pointer'}}></i>
  }
 
  return (
    <tr className='fw-normal'>
        <th>
          <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
          <span>{task.description}</span>
        </td>
        <td>
          <span className='align-middle'>{taskLevelBadge()}</span>
        </td>
        <td className='align-middle'>
          <span onClick={() => {if(window.confirm('Sure to change?')){completeTask(task)}}}>{taskCompletedIcon()}</span>
          <span onClick={() => {if(window.confirm('Sure to delete?')){eraseTask(task)}}}><i className='bi-trash' style={{color:'tomato', cursor:'pointer'}}></i></span>
        </td>
    </tr>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    completeTask: PropTypes.func.isRequired,
    eraseTask: PropTypes.func.isRequired,
}

export default TaskComponent
