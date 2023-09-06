import React, { useState } from "react"

function UseEffectDemo()
{
    const [product, setProduct] = React.useState({
        sku: "P1", name: "Prod 1", price: "$10.00"
    })
    const [name, setName] = React.useState('Kaushal')
    React.useEffect(() => {
        console.log(`Use Effect ${product.name}`)
        document.title = `View Product "${product.name}"`
    }, [product.name])
    function setProductTwo()
    {
        setProduct({
            sku: "P2", name: "Prod 2", price: "$20.00"
        })
    }
    return (
        <div>
            {product.sku} - {product.name} - {product.price}
            <br /><br />
            <button onClick={setProductTwo}>Add Product Two</button>
            <br />
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
export default UseEffectDemo
