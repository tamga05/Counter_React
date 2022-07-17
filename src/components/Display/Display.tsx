import React from 'react';
import s from './Display.module.css';


type DisplayType = {
    count: number
}


export const Display = (props: DisplayType) => {

    return (
        <div className={props.count >= 5 ? `${s.score} ${s.scoreRed}` : s.score}>
            {props.count}
        </div>
    )
}
