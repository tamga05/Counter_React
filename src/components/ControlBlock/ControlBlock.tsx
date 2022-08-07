import React from 'react';
import s from './ControlBlock.module.css'
import {Button} from '../Button/Button';


type ControlBlockType = {
    onClickPlus: () => void
    onClickReset: () => void
    count: number
}


export const ControlBlock = (props: ControlBlockType) => {
    return (
        <div className={s.control}>
            <Button title={'plus'} callBack={props.onClickPlus} isDisabled={props.count === 5}/>
            <Button title={'reset'} callBack={props.onClickReset} isDisabled={props.count === 0}/>
        </div>
    )
}

