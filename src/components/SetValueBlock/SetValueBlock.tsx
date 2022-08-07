import React, {useState} from 'react';
import s from './SetValueBlock.module.css'
import {Button} from '../Button/Button';


// type SetValueBlockType = {
//     // onClickSetValue: () => void
//     // title: string
// }



export const SetValueBlock = () => {

    let [startValue, setStartValue] = useState(0)

    const onClickSetValue = () => {

    }

    return (
        <div className={s.control}>
            <Button title={'set'} callBack={onClickSetValue} isDisabled={false}/>
        </div>
    )
}

