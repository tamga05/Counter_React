import React, {useState} from 'react';
import s from './Counter.module.css'
import {Display} from './components/Display/Display';
import {ControlBlock} from './components/ControlBlock/ControlBlock';
import {SetValueBlock} from './components/SetValueBlock/SetValueBlock';
import {SetValueDisplay} from './components/SetValueDisplay/SetValueDisplay';


function App() {

    const startValue = 0;
    const maxValue = 5;

    let [count, setCount] = useState(startValue);

    const onClickPlus = () => {
        if (count < maxValue) { // Ограничение МАКСИМАЛЬНО вводимого числа
            setCount(count + 1) // Именно такой синтаксис Правильный, а не ++count !!!
        }
    }

    const onClickReset = () => {
        setCount(startValue)
    }

    const onClickSetValue = () => {

    }

    return (
        <div className={s.counter}>
            <div className={s.inner}>
                <SetValueDisplay/>
                <SetValueBlock onClickSetValue={onClickSetValue}/>
            </div>
            <div className={s.inner}>
                <Display count={count}/>
                <ControlBlock onClickPlus={onClickPlus} onClickReset={onClickReset} count={count}/>
            </div>
        </div>
    )
}

export default App;
