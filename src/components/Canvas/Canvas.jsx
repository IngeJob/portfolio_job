import { useContext, useRef, useState, useEffect } from 'react';
import LanguageContext from '../../Context/LanguageContext';

import './canvas.css'

const Canvas = () => {
    const [strokeColor, setStrokeColor] = useState('#000000');
    const [strokeWidth, setStrokeWidth] = useState('1');
    const { textData } = useContext(LanguageContext);

    const handleChangeColor = e => {
      setStrokeColor(e.target.value);
    };

    const handleChangeWidth = e => {
        setStrokeWidth(e.target.value);
    };

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [ isDrawing, setIsDrawing ] = useState(false);

    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      contextRef.current = context;
      context.lineCap = 'round';
     
      context.lineWidth = 5;
    }, [])  

    const startDrawing = ({nativeEvent}) =>{
        const {offsetX, offsetY} = nativeEvent;

        contextRef.current.strokeStyle = strokeColor;
        contextRef.current.lineWidth = strokeWidth;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);

        setIsDrawing(true);
    }

    const finishDrawing = () =>{
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    const draw = ({nativeEvent}) =>{
        if(!isDrawing){
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    const reset = () =>{
        const canvas = canvasRef.current;
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }

  return (
    <div className='canvas__container'>
        <h1 className='p__text'>{textData.header.board}</h1>
        <canvas 
            ref={canvasRef} 
            width={'450px'} 
            height={'400px'}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            onMouseLeave={finishDrawing}
        />
        <div className='canvas__buttons'>
            <input type="color" onChange={handleChangeColor} value={strokeColor} />
            <input type="range" min='1' max='10' onChange={handleChangeWidth} value={strokeWidth} />
            <button className='custom__button' onClick={reset}>Reset</button>
        </div>
    </div>
    

  )
}

export default Canvas