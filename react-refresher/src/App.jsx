import { useState } from "react";

function App() {

 const [count , setCount] = useState(0)

 const handleIncrement = ()=>{

 }

 const handleDecrement = ()=>{
  
 }

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={setCount(count + 1)}>➕</button>
      <button onClick={()=>setCount(count - 1)}>➖</button>
    </div>
  );
}

export default App;
