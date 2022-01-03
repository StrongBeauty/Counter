import React, {FC} from "react";


interface IB {
    text: string
}

export const B: FC<IB> = ({text}) => {
    return (
     <div>{text}</div>
    )
}