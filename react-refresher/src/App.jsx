import React, { useState } from "react";

const App = () => {

  const handleSubmit = (e)=>{
  e.preventDefault()
    console.log(e.target.elements.name.value)
  }


return (<form onSubmit={handleSubmit}>
    <input name="name"/>
    <button type="submit">Submit</button>
  </form>)
};

export default App;

