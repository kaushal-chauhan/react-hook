import Counter from "./components/Counter"
import Products from "./components/Products"
import StateArray from "./components/StateArray"
import UseEffectDemo from "./components/UseEffectDemo"
import MouseEvent from "./components/MouseEvent"
import React, { useState } from "react"
import Posts from "./components/fetchData/Posts"
import UseReducerDemo from "./components/UseReducerDemo"

import UseContextDemo from "./components/UseContextDemo"
export const UserContext = React.createContext()

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {/* <Counter />
      <Products />
      <StateArray /> */}
      {/* <UseEffectDemo />
      <br /><br/>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <MouseEvent />} */}
      {/* <Posts /> */}
      {/* <UserContext.Provider value={'Chauhan'}>
        <UseContextDemo />
      </UserContext.Provider> */}
      <UseReducerDemo />
    </div>
  );
}

export default App
