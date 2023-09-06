import Counter from "./components/Counter"
import Products from "./components/Products"
import StateArray from "./components/StateArray"
import UseEffectDemo from "./components/UseEffectDemo"
import MouseEvent from "./components/MouseEvent"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {/* <Counter />
      <Products />
      <StateArray /> */}
      <UseEffectDemo />
      <br /><br/>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <MouseEvent />}
    </div>
  );
}

export default App;
