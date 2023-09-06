import React from "react"
import Button from "./Button"

const counter = 0
const reducer = (state, action) => {
    switch (action) {
        case '+': return state + 1
        default: break;
    }
    return state
}
export const BtnAction = React.createContext()

function ReducerWithContext()
{
    const [count, dispatch] = React.useReducer(reducer, counter)
    return (
        <div>
            Counter - {count}
            <BtnAction.Provider value={{ count: count, dispatch: dispatch }}>
                <Button />
            </BtnAction.Provider>
        </div>
    )
}
export default ReducerWithContext
