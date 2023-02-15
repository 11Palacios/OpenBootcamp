import React, {useState} from 'react';

const Box = () => {
    
    const [bgColor, setBgColor] = useState('black')
    const [clicked, setClicked] = useState(false)

    const handleClick = () =>{
        clicked ? setClicked(false) : setClicked(true)
    }
    
    const mouseMove = (e) => {
        const localX = e.clientX - e.target.offsetLeft;
        const localY = e.clientY - e.target.offsetTop;
        const localZ = Math.floor(Math.random() * 256);
        if(!clicked){
           setBgColor(`rgb(${localX}, ${localY}, ${localZ})`) 
        }
        
      }

    return (
        <div id='box' onMouseMove={mouseMove} onDoubleClick={handleClick} style={{backgroundColor:bgColor}}>
            
        </div>
    );
}

export default Box;
