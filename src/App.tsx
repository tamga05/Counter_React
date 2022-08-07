import React, {useState} from 'react';
import s from './Counter.module.css'
import {Display} from './components/Display/Display';
import {ControlBlock} from './components/ControlBlock/ControlBlock';
import {SetValueBlock} from './components/SetValueBlock/SetValueBlock';
import {SetValueDisplay} from './components/SetValueDisplay/SetValueDisplay';


function App() {

    const minValue = 0;
    const maxValue = 5; // Ограничение МАКСИМАЛЬНОГО значения числа, до которого считает счетчик


    let [count, setCount] = useState(minValue);

    const onClickPlus = () => {
        if (count < maxValue) { // Ограничение МАКСИМАЛЬНО вводимого числа
            setCount(count + 1) // Именно такой синтаксис Правильный, а не ++count !!!
        }
    }

    const onClickReset = () => {
        setCount(minValue)
    }

    // const onClickSetValue = () => {
    //
    // }

    return (
        <div className={s.counter}>
            <div className={s.inner}>
                <SetValueDisplay/>
                <SetValueBlock/>
            </div>
            <div className={s.inner}>
                <Display count={count}/>
                <ControlBlock onClickPlus={onClickPlus} onClickReset={onClickReset} count={count}/>
            </div>
        </div>
    )
}

export default App;
