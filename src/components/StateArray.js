import React from "react"

function StateArray()
{
    const [numbers, setNumbers] = React.useState([1,2])
    function addNumber() {
        setNumbers([...numbers, Math.floor(Math.random() *10 ) + 1])
    }
    return (
        <>
            <ul>
                {numbers.map((number, index) => <li key={index}>{index} - {number}</li>)}
            </ul>
            <button onClick={addNumber}>Add Number</button>
        </>
    )
}
export default StateArray
