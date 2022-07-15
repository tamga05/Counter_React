import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from './components/Button/Button';
import {Display} from './components/Display/Display';


function App() {

    const minValue = 0;
    const maxValue = 5; // Ограничение МАКСИМАЛЬНО значения числа, до которого считает счетчик

    let [count, setCount] = useState(minValue);

    const onClickIncrement = () => {
        if (count < maxValue) { // Ограничение МАКСИМАЛЬНО вводимого числа
            setCount(count + 1)
        }
    }

    const onClickReset = () => {
        setCount(minValue)
    }

    return (
        <div className={s.counter}>
            <div className={s.inner}>
                <Display count={count}/>
                <div className={s.control}>
                    <Button title={'plus'} callBack={onClickIncrement} isDisabled={count === 5}/>
                    <Button title={'reset'} callBack={onClickReset} isDisabled={count === 0}/>
                </div>
            </div>
        </div>
    )
}

export default App;
