import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
 const[name,Setname]=useState("Prachi");
  return (
    <input type="text" onChange={(e)=>Setname(e.target.value)} value={name}></input>
    <Welcome name= {name} />
  )
}


export default App;
