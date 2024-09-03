import './Claculator.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Claculator(){
    let [result , setResult] = useState('')
    let [hasDot , setHasDot] = useState(false)
    let operators = ['+' , '-' , '/' , '*']
    const checkInput = (text)=>{
        if(text === '÷') return '/'
        if(text === '×') return '*'
        return text
    }

    const clickHanHandler = (event)=>{
        let input = checkInput(event.target.innerText);
        if(input === '.'){
            if(hasDot === true) return
            else setHasDot(true)
        } 
        if(operators.includes(input)){
            setHasDot(false)
        }
        setResult(result + input);
    }
    
    const clearScreen = ()=>{
        setResult('')
        setHasDot(false)
    }

    const backSpaceBtn = ()=>{
        if(result.endsWith('.')){
            setHasDot(false)
        }
        setResult(result.slice(0,-1))
    }
    const equalBtn = ()=>{
        setResult(String(evaluate(result)));
        setHasDot(false)
    }

    return(
        <div className="container">
            <div className="screen">{result}</div>
            <div className="btns">
                <button onClick = {clearScreen}  className='bigBtn color'>Clear</button>
                <button onClick = {backSpaceBtn}  className='color'>C</button>
                <button onClick = {clickHanHandler}  className='color'>÷</button>
                <button onClick = {clickHanHandler} >7</button>
                <button onClick = {clickHanHandler} >8</button>
                <button onClick = {clickHanHandler} >9</button>
                <button onClick = {clickHanHandler}  className='color'>×</button>
                <button onClick = {clickHanHandler} >4</button>
                <button onClick = {clickHanHandler} >5</button>
                <button onClick = {clickHanHandler} >6</button>
                <button onClick = {clickHanHandler}  className='color'>-</button>
                <button onClick = {clickHanHandler} >1</button>
                <button onClick = {clickHanHandler} >2</button>
                <button onClick = {clickHanHandler} >3</button>
                <button onClick = {clickHanHandler}  className='color'>+</button>
                <button onClick = {clickHanHandler}  className='bigBtn' >0</button>
                <button onClick = {clickHanHandler}  className='color'>.</button>
                <button onClick = {equalBtn}  className='color'>=</button>
            </div>
        </div>
    )
}
export default Claculator