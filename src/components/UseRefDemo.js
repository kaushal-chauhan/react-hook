import React from "react"

function UseRefDemo()
{
    const refVar = React.useRef(null)
    React.useEffect(() => {
        refVar.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={refVar}/>
        </div>
    )
}
export default UseRefDemo
