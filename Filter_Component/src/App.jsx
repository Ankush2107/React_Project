import { useState } from "react";
import './App.css'

const images = [
  "https://images.pexels.com/photos/19031635/pexels-photo-19031635/free-photo-of-a-window-with-a-reflection-of-trees-and-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19226023/pexels-photo-19226023/free-photo-of-a-red-door-and-a-spiral-staircase-in-front-of-a-white-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/18925513/pexels-photo-18925513/free-photo-of-a-lighthouse-sits-on-a-rocky-shore-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length-1 ? 0 : current + 1)
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length-1 : current-1)
  }

  return (
    <div>
      <h1 className="heading">Image Carousel</h1>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
           ⬅
        </div>
        <div className="images">
          {images.map(
            (image, index) =>
              current === index && (
                <div key={image} className="slide">
                  <img src={image} alt="images" />
                </div>
              )
          )}
        </div>
        <div className="right-arrow" onClick={nextSlide}>
           ⮕
        </div>
      </div>
    </div>
  );
}
