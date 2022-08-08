import React from 'react';
import s from './SetValueBlock.module.css'
import {Button} from '../Button/Button';


type SetValueBlockType = {
    onClickSetValue: () => void
}


export const SetValueBlock = (props: SetValueBlockType) => {

    return (
        <div className={s.control}>
            <Button title={'set'} callBack={props.onClickSetValue} isDisabled={false}/>
        </div>
    )
}

