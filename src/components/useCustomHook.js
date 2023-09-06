import React from "react"

function CustomHook(counter)
{
    React.useEffect(() => {
        document.title = `counter - ${counter}`
    }, [counter])
}
export default CustomHook
