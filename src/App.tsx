import React from 'react';
// import './App.css';
import s from './Counter.module.css'
import {Button} from './components/Botton/Button';


function App() {
    return (
        <div className={s.counter}>
            <div className={s.inner}>
                <div className={s.score}>0</div>
                <div className={s.control}>
                    <Button title={'inc'}/>
                    <Button title={'reset'}/>
                </div>
            </div>
        </div>
    )
}

export default App;
