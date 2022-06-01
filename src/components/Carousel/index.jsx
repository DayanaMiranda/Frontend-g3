import React from 'react'
import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'

import exemploCarro from "../../img/exemplo-carro.svg"

function CarouselComponent() {
  return (
    <div>
<Carousel pause={false}>
  <Carousel.Item interval={3000} className="carousel-container">
    <img
      className="w-100"
      src={exemploCarro}
      alt="carro modelo x"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000} className="carousel-container">
    <img
      className="w-100"
      src={exemploCarro}
      alt="carro modelo x"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}  className="carousel-container">
    <img
      className="w-100"
      src={exemploCarro}
      alt="carro modelo x"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  )
}

export default CarouselComponent;
