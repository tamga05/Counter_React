import React, {ChangeEvent, useState} from 'react';
import s from './SetValueDisplay.module.css'


export const SetValueDisplay = () => {

    let [maxValue, setMaxValue] = useState('5')

    let [startValue, setStartValue] = useState('0')


    const onChangeSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
        localStorage.setItem('maxValue', JSON.stringify(e.currentTarget.value))
        // localStorage.setItem('maxValue', maxValue)
    }

    const onChangeSetStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
        localStorage.setItem('startValue', JSON.stringify(e.currentTarget.value))
        // localStorage.setItem('startValue', startValue)
    }

    //     let maxValueString = localStorage.getItem('maxValue')
    //     if (maxValueString) {
    //         maxValue = JSON.parse(maxValueString)
    //         setMaxValue(maxValue)
    //     }


    return (
        <div className={s.inner}>
            <div className={s.inputBlock}>
                max value: <input type="number" onChange={onChangeSetMaxValueHandler} value={maxValue}/>
            </div>
            <div className={s.inputBlock}>
                start value: <input type="number" onChange={onChangeSetStartValueHandler} value={startValue}/>
            </div>
        </div>
    )
}

