import React, { useState , useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [count , setCount] = useState(0);


  const onToggleTheme = () => {
    setDarkMode(!darkMode);
  
  };

  // // *1. Without dep array []
  // useEffect(()=>{
  //   // heavy billions cal
  // })

  // *2 with empty dep

  // useEffect(()=>{
  //   console.log("Hello from useEffect")
  // },[])

  
  useEffect(()=>{
    console.log("Hello from useEffect")
  })

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: darkMode ? "#121212" : "#ffff",
        color: darkMode ? "#ffffff" : "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s",
      }}
    >
      <h1>Mode {darkMode ? "Change to light" : "Change to Dark"}</h1>
      <button onClick={onToggleTheme}>Toggle Theme</button>

      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>

    </div>
  );
};

export default App;
