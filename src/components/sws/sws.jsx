import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Eventcarousel from '../eventcarousel';
import styleSws from "./sws.module.css"
export default function Sws() {

    const [Event, setEvent] = useState([]);
    const [Loaded,setLoaded]=useState(false)
    const [errorFetchedChecker, seterrorFetchedChecker] = useState(false);

   useEffect(() => {
    async function fetchData(){
    await axios
      .post("http://localhost:3001/api/SWS")
      .then((response) => {
  
    if(response.data==="not found"){
      setLoaded(true)
        setEvent("");
     
      }
    else if(response.data.length>0){
      setLoaded(true)
      setEvent(response.data)
    }})
    .catch(err=>{
     
      seterrorFetchedChecker((c) => !c);
    });
  }
  if(errorFetchedChecker){
    setTimeout(()=>{
        fetchData();
    },[3000])// 3 seconds
} else {
    fetchData();
} }, [errorFetchedChecker]); 
  return <div className={styleSws.root}>
        {/* {Loaded? */}
      <div className={styleSws.titleEng}>
      <h1 className={styleSws.title}>What's a Startup Weekend?</h1>
      <p className={styleSws.firstParagraph} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse numquam quis debitis quae optio. Dicta culpa voluptas illum repellendus aut architecto voluptate minus, ipsa nesciunt cumque mollitia consequatur, soluta voluptatibus!

      </p>
      </div>{/* :""} */}
  </div>;
}
