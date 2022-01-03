import React, {ChangeEvent} from "react";
import './App.css';

type entryFieldPropsType = {
    className: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function EntryField(props: entryFieldPropsType) {
    return(
        <div>
             <input type='number' className={props.className} value={props.value} onChange={props.onChange} />
        </div>
    )
}