import './Claculator.css';
import { useState } from 'react';

function Claculator(){
    //قسمت شرط برای جلو گیری از تکرار شدن دات یا نقطه در اسکریین میباشد
    let [result , setResult] = useState('')

    const clickHanHandler = (event)=>{
        let input = event.target.innerText;
        if(input == '.' && result.includes('.')) return;
        setResult(result + input);
    }

    const clearScreen = ()=>{
        setResult('')
    }

    const backSpaceBtn = ()=>{
        setResult(result.slice(0 , -1))
    }
    //eval یه تابعیه که ارزیابی میکنه و بعد با استفاده از string به رشته تبدیلش میکنیم
    const equalBtn = ()=>{
        setResult(String(eval(result)));
    }

    return(
        <div className="container">
            <div className="screen">{result}</div>
            <div className="btns">
                <button onClick = {clearScreen}  className='bigBtn color'>Clear</button>
                <button onClick = {backSpaceBtn}  className='color'>C</button>
                <button onClick = {clickHanHandler}  className='color'>&divide;</button>
                <button onClick = {clickHanHandler} >7</button>
                <button onClick = {clickHanHandler} >8</button>
                <button onClick = {clickHanHandler} >9</button>
                <button onClick = {clickHanHandler}  className='color'>&#215;</button>
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