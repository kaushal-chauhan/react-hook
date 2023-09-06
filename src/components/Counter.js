import React from "react"

function Counter()
{
    const [count, setCount] = React.useState(0)
    function plusFive()
    {
        var i = 1
        while(i <= 5) {
            setCount(prevCnt => prevCnt + 1)
            i++
        }
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Counter - {count}</button>
            <button onClick={plusFive}>Counter(+5) - {count}</button>
        </div>
    )
}
export default Counter