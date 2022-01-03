import React from "react";
import './App.css';

type ButtonPropsType = {
    // string, number, boolean, () => void
    clickButton: () => void
    title: string
    state: boolean
    className : string
}

export function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.clickButton}
                className={props.className}
            disabled={!props.state}>{props.title}
        </button>
    )
}