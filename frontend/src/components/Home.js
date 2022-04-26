import {React,useEffect,useState} from 'react'
import Header from './Header'
import {useLocation} from 'react-router-dom';
import Footer from './Footer';

export default function Home() {

  const array1 = [{
        title:"Home",
        content:"Hey Guys & Girls, This is my First Blog Website. You can also make a new Post by going on :- localhost:4000/compose in the Search Bar...Have a Good Day!!"
    }];
  // let location = useLocation();
  // if(location.state!==null){
  //   array.push({ title:location.state.title,
  //         content:location.state.content
  //       });
  // }
  const [array,setArray] = useState([{}]);
  useEffect(()=> {
    fetch("/api").then(response=>response.json()).then(data => {setArray(data)})
  },[])
  return (<>
    <Header />
    {
      array.map((item)=>(
        <>
        <h1>{item.title}</h1>
        <p>{item.content}</p></>
      ))
    }

    <Footer />
    </>
  )
}
