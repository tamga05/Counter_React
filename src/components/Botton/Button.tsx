import React from 'react';
import s from './Button.module.css';


type ButtonType={
    title: string
}


export const Button = (props: ButtonType) => {
    return (
        <div className={s.button}>
            {props.title}
        </div>
    );
};

