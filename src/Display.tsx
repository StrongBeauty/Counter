import React from "react";
import './App.css';
import {StatusType} from "./App";

type DisplayPropsType = {
    className: string
    counter?: number
    message?: string
}

export function Display(props: DisplayPropsType) {
    return (
        <div className='display'><p className={props.className}>
            {props.message ? props.message : props.counter}</p></div>
    )
}