import React from 'react'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import stylesEvent from "./eventcarousel.module.css"
export default function Eventcarousel(props) {
    return (
        <div className={stylesEvent.bodyWidth}>
       

            <Carousel fade={false} indicators={false}>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain} >
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[0]}
      alt="First slide"
    />
 {/*    <Carousel.Caption className="carouselText">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[1]}
      alt="Second slide"
    />

{/*     <Carousel.Caption className="carouselText">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[2]}
      alt="Third slide"
    />

  {/*   <Carousel.Caption className="carouselText">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[3]}
      alt="Third slide"
    />

  {/*   <Carousel.Caption className="carouselText">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[4]}
      alt="Third slide"
    />

  {/*   <Carousel.Caption className="carouselText">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[5]}
      alt="Third slide"
    />

  {/*   <Carousel.Caption className="carouselText">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[6]}
      alt="Third slide"
    />

  {/*   <Carousel.Caption className="carouselText">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[7]}
      alt="Third slide"
    />

  {/*   <Carousel.Caption className="carouselText">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[8]}
      alt="Third slide"
    />

  {/*   <Carousel.Caption className="carouselText">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={2000} className={stylesEvent.carouselmain}>
    <img
      className={`d-block w-100 ${stylesEvent.img}`} 
      src={"./imgs/"+props.img[9]}
      alt="Third slide"
    />

  {/*   <Carousel.Caption className="carouselText">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
        </div>
    )
}
