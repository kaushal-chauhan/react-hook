import React from "react"

function MouseEvent() {
    const [xPos, setXPos] = React.useState(0)
    const [yPos, setYPos] = React.useState(0)
    function mouseListner(e)
    {
        console.log("mouse move")
        setXPos(e.clientX)
        setYPos(e.clientY)
    }
    React.useEffect(() => {
        console.log("Use Effect")
        window.addEventListener("mousemove", mouseListner)
        return () => {
            console.log("Use Effect Cleanup")
            window.removeEventListener("mousemove", mouseListner)
        }
    }, [])
    return (
        <div>
            Mouse : {xPos} x {yPos}
        </div>
    )
}
export default MouseEvent
