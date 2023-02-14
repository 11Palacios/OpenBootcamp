import React from 'react';

const Form = ({handleNewName, handleNewNumber, handleNewContact}) => {
    return (
        <div>
            <form className='mb-3' onSubmit={handleNewContact}>
                <div className='form-group'>
                   <input type='text' id='inputName' onChange={handleNewName} placeholder='Name' required/> 
                </div>
                <div className='form-group'>
                    <input type='text' id='inputNumber' onChange={handleNewNumber} placeholder='Number' required/>
                </div>
                
                <button type='submit' className='btn btn-primary'>Add</button>
            </form>
        </div>
    );
}

export default Form;
