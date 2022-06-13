import React from "react";
import { Carousel } from "react-bootstrap";

//css
import "bootstrap/dist/css/bootstrap.min.css";

//img

function SliderComponent() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <div className="d-block w-100 gradient1" alt="First slide" />
        <Carousel.Caption className="caption">
          <h3 lang="tr" className="title">
            Adaletin kuvvetli, kuvvetlilerin de adaletli olmaları gerekir
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="d-block w-100 gradient2" alt="Second slide" />

        <Carousel.Caption className="caption">
          <h3 lang="tr" className="title">
            A&A Hukuk ve Danışmanlık bürosu
          </h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="d-block w-100 gradient3" alt="Third slide" />

        <Carousel.Caption className="caption">
          <h3 lang="tr" className="title">
            Hukuk Davaları alanında 17 yıllık deneyim
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderComponent;
