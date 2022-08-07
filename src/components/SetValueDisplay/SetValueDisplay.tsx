import React, {ChangeEvent, useState} from 'react';
import s from './SetValueDisplay.module.css'


export const SetValueDisplay = () => {

    let [maxValue, setMaxValue] = useState()

    let [startValue, setStartValue] = useState()


    const onChangeSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('maxValue', JSON.stringify(e.currentTarget.value))
        setMaxValue(maxValue)
    }

    const onChangeSetStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {

        } else {
            localStorage.setItem('startValue', JSON.stringify(e.currentTarget.value))
            setStartValue(startValue)
        }
    }

    return (
        <div className={s.inner}>
            <div className={s.inputBlock}>
                max value: <input type="number" onChange={onChangeSetMaxValueHandler}/>
            </div>
            <div className={s.inputBlock}>
                start value: <input type="number" onChange={onChangeSetStartValueHandler}/>
            </div>
        </div>
    )
}

