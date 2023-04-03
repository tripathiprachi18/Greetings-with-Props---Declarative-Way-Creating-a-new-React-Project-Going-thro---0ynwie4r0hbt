import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
 const[name,Setname]=useState("Prachi");
 const [click,setClick]=useState(true);
 const handleClick =(e)=>{
  Setname(e.target.value)
  setClick(!click)
 }
  return (
   {click ?<input type='text'placeholder='Enter Name' value={name} onchange={handleClick} /> : <Welcome />}
  )
}


export default App;
