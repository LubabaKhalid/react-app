/*import React from 'react';
import Slider from 'react-slick';

const BackgroundSlideshow = () => {
  const images = [
    '/pu1.jpg',
    '/pu2.jpg',
    '/pu3.jpg',
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: false,
  };

  return (
    <div className="background-slideshow">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="background-slide" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundSlideshow;*/


/*import React from 'react';
import Slider from 'react-slick';

const BackgroundSlideshow = () => {
  const images = [
    '../images/pu1.jpg',
    '../images/pu2.jpg',
    '../images/pu3.jpg',
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: false,
  };

  return (
    <div className="background-slideshow">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="background-slide" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundSlideshow;

*/
// BackgroundSlideshow.js
// BackgroundSlideshow.js
// BackgroundSlideshow.js
import React, { useState, useEffect } from 'react';
import pu1 from '../images/pu1.jpg';
import pu2 from '../images/pu2.jpg';
import pu3 from '../images/pu3.jpg';
import './BackgroundSlideshow.css';

const images = [pu1, pu2, pu3];

function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slideshow-container">
      {images.map((img, i) => (
        <div
          key={i}
          className={`bg-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}

export default BackgroundSlideshow;
