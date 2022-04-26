import { Button } from '@mui/material'
import styles from './styles.css'
import React,{useState} from 'react'
import Header from './Header'
import Input from './Input'
import {Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from "axios"
export default function Compose(props) {
  let navigate = useNavigate();
  const[title,setTitle] = useState("");
  function handletitle(e){
    setTitle(e.target.value);
  }
  const[content,setContent] = useState("");
  function handlecontent(e){
    setContent(e.target.value);
  }  
  const publish = ()=>{
    const post = {title:title,content:content};
    if(post){
      axios.post("http://localhost:4000/register",post).then(res => console.log(res));
    }
    else{
      alert("invalid :(..")
    }
    
  }
  function navigation() {navigate('/Home',{state:{title:title,content:content,name:'sabaoon'}})};
  return (<>
    <Header />
    <div className='container'>
    <form method="POST">
      <h1>Compose</h1>
        <h3>Title</h3>
        <input type="text" onChange={handletitle}/>
        <h3>Content</h3>
        <textarea className="flow-control" rows="5" cols="30" name="post" onChange={handlecontent}/>
       
      <br></br>
      <button  onClick={publish}>Publish</button>
      
    </form>
    </div>
    <Footer />
    {/* ()=>{register();
      // navigation()
      } */}
       
      {/* <Input title={"title"}/>
      <Input title={"content"}/> */}
  </>
  )
}
