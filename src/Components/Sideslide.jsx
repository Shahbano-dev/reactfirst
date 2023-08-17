import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

export default function Sideslide() {
  return (
     <>
    <Carousel>
      <Carousel.Item>
        <img style={{height : "550px"}}
          className="d-block w-100"
          src="https://www.pngarts.com/files/4/Luxury-Perfume-PNG-Image-with-Transparent-Background.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height : "550px"}}
          className="d-block w-100"
          src="https://vitalizemagazine.com/wp-content/uploads/2017/07/SpendSave_1500x1000.jpg"
          alt="Second slide"
        />
 
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height : "550px"}}
          className="d-block w-100"
          src="https://shop.netcash.co.za/wp-content/uploads/2021/05/running-shoes-white-background.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
     </>
  )
}
