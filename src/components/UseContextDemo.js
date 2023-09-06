import React, { useState } from "react"
import {UserContext} from "../App"

function UseContextDemo() {
    const userName = React.useContext(UserContext)
    return (
        <>
            <UserContext.Consumer>
                {user => <h1>Kaushal {user}</h1>}
            </UserContext.Consumer>
            {userName}
        </>
    )
}
export default UseContextDemo
