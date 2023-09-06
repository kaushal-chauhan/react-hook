import React, { useContext } from "react"
import {BtnAction} from "./ReducerWithContext"

function Button()
{
    const action = useContext(BtnAction)
    return (
        <button onClick={() => action.dispatch("+")}>Counter - {action.count}</button>
    )
}
export default Button
