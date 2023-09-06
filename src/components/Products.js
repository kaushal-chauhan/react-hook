import React, { useState } from "react"

function Products()
{
    const [products, setProducts] = useState({
        sku: "P1", name: "Prod 1", price: "$10.00"
    })
    function addProductTwo()
    {
        setProducts({
            sku: "P2", name: "Prod 2", price: "$20.00"
        })
    }
    function inputOnChange(e)
    {
        setProducts({
            ...products,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <br /><br /><br />
            {products.sku} - {products.name} - {products.price}
            <br /><br /><br />
            <button onClick={addProductTwo}>Add Product Two</button>
            <br /><br /><br />
            Sku: <input name="sku" value={products.sku} onChange={inputOnChange} /><br />
            Name: <input name="name" value={products.name} onChange={inputOnChange} /><br />
            Price: <input name="price" value={products.price} onChange={inputOnChange} /><br />
        </div>
    )
}
export default Products
