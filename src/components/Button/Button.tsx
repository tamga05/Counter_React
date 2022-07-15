import React from 'react';
import s from './Button.module.css';


type ButtonType = {
    title: string
    callBack: () => void
    isDisabled: boolean
}


export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button
            disabled={props.isDisabled}
            className={s.button}
            onClick={onClickHandler}>
            {props.title}
        </button>
    )
}
