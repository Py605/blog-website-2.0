import {React,useState} from 'react'

function Input(props) {
  const[input,setInput] = useState("");
  function handleEvent(e){
    setInput(e.target.value);
  }
  return (
    <div>
      <h3>{props.title}</h3>
      <input onChange={handleEvent}/>
    </div>
  )
}

export default Input