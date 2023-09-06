import React from "react"

function UseCallbackDemo()
{
    const [count, setCount] = React.useState(0)
    const handleClick = React.useCallback(() => {
        setCount(count + 1)
    }, [count])

    // const handleClick = React.useMemo(() => {
    //     setCount(count + 1)
    // }, [count])

    return (
        <button onClick={handleClick}>Counter - {count}</button>
    )
}
export default UseCallbackDemo
