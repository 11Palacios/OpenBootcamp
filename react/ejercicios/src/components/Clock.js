import React , { useState, useEffect } from 'react';

const Clock = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San José'
    }

    const [estado, setEstado] = useState(initialState)

    const tick = () => {

        const newState = {
            fecha: new Date(),
            edad: estado.edad++,
            nombre: estado.nombre,
            apellidos: estado.apellidos
        }
        setEstado(newState)
    }

    useEffect(() => {
        setInterval(() => {
            tick();
        }, 1000);
    
      return () => {
        clearInterval();
      }
    }, [])
    

    return (
        <div>
            <h2>Hora Actual: {estado.fecha.toLocaleTimeString()}</h2>
            <h3>{estado.nombre} {estado.apellidos}</h3>
            <h1>{estado.edad}</h1>
        </div>
    );
}

export default Clock;
