import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import Table from './components/Table';
import Form from './components/Form';

function App() {

  const contactsList = [
    {name:'Pepe Botella', number:"+34-666-666-666", online:true},
    {name:'Eleanor Rigby', number:"+40-012-345-670", online:false}
  ]

  const [list, setList] = useState(null)
  const [newName, setNewName] = useState(null)
  const [newNumber, setNewNumber] = useState(null)

  useEffect(() => {
    setList(contactsList)
  }, [])

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleNewContact = (e) => {
    e.preventDefault()
    const newList = [...list]
    newList.push({name:newName, number:newNumber, online:false})
    setList(newList)
    document.getElementById('inputName').value=''
    document.getElementById('inputNumber').value=''
  }

  const erase = (name) => {
    const newList = [...list]
    const filtered = newList.filter(c => c.name !== name)
    setList(filtered)
  }

  const connect = (name) => {
    const newList = [...list]
    for(let i = 0; i < newList.length; i++){
      if(name === newList[i].name){
        if(newList[i].online){
          newList[i].online=false
        }else{
          newList[i].online=true
        }
      }
    }
    setList(newList)
  }

  return (
    <div className="App">
      <Title />
      <Form handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleNewContact={handleNewContact} />
      {list 
      ? 
        <Table list={list} erase={erase} connect={connect} />
      : 
        <p>0 Contacts</p>
      }
    </div>
  );
}

export default App;
