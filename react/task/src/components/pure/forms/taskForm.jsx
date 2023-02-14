import React from 'react';
import { LEVELS } from '../../../models/levels.enum';

const TaskForm = ({addTask, handleNewName, handleNewDescription, handleNewPriority}) => {

    let levs = []
    for (const [value] of Object.entries(LEVELS)) {
        levs.push(value.toLowerCase())
      }

    return (
        <form onSubmit={addTask}>
            <input type='text' onChange={handleNewName} id='inputName' placeholder='Name' required/>
            <input type='text' onChange={handleNewDescription} id='inputDescription' placeholder='Description' required/>
            <select id='selectPriority' onChange={handleNewPriority} required>
            <option value="" selected disabled hidden>Choose priority</option>
                {levs.map(l => 
                    <option value={l} key={l}>{l}</option>
                )}
            </select>
            <button>Add</button>
        </form>
    );
}

export default TaskForm;
