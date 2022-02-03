import React from "react";
import { Carousel } from "react-bootstrap";
import stylesEvents from "./events.module.css";
import stylesEvent from "./eventcarousel.module.css"


export default function EventsComp(props) {

var imgs=props.img

console.log(imgs)
 return (
        <div className={stylesEvents.root}>

      {/*  <h1>hello</h1> */}
        <Carousel fade={false} indicators={false}>
         {props.img.map((val)=>{return <Carousel.Item interval={2000} key={val} className={stylesEvent.carouselmain} >
<img
  className={`d-block w-100 ${stylesEvent.img}`} 
  src={"../../imgs/events/"+val}
  alt="First slide"
/>

</Carousel.Item> })} 

{/* <Carousel.Item interval={2000} className={stylesEvent.carouselmain} >
<img
  className={`d-block w-100 ${stylesEvent.img}`} 
  src={"../imgs/events/"+props.img[1]}
  alt="First slide"
/>

</Carousel.Item> */}


</Carousel> 
 {/*  <Banner img={"img3.jpg"} /> */}
 
            
        </div>
    )
}
