import React from "react"

const counter = 0
const reducer = (state, action) => {
    switch (action) {
        case '+': return state + 1
        default: break;
    }
    return state
}

const initProduct = {
    sku: "P1",
    name: "Prod 1",
    price: "$10.00"
}
const productReducer = (product, action) => {
    switch (action.type) {
        case 'add': return {
            sku: "P2",
            name: "Prod 2",
            price: "$20.00"
        }
        default: break;
    }
    return product
}
function UseReducerDemo()
{
    const [count, dispatch] = React.useReducer(reducer, counter)
    const [product, dispatchProduct] = React.useReducer(productReducer, initProduct)
    return (
        <div>
            <button onClick={() => dispatch('+')}>Counter - {count}</button>
            <br /><br /><br />
            {product.name} - {product.sku} - {product.price}
            <button onClick={() => dispatchProduct({type: 'add'})}>Add Product</button>
        </div>
    )
}
export default UseReducerDemo
