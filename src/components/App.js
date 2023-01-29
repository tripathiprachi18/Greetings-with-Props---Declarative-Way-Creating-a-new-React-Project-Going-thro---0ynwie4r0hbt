import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const[name,Setname]=useState("Prachi");
  return (
    <input onChange={(e)=>Setname(e.target.value)}></input>
    <Welcome name= {name} />
  )
}


export default App;
