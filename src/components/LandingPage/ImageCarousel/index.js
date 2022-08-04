import React from "react";
import "antd/dist/antd.less";
import { Carousel } from "antd";
import "./styles.css";

const ImageCarousel = () => {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    borderRadius: "3px",
  };

  return (
    <Carousel
      className="carousel-container"
      autoplay
      autoplaySpeed={4000}
      effect="fade"
    >
      <div>
        <h3 style={contentStyle}>
          <img
            className="center"
            src="https://cdnimg.webstaurantstore.com/uploads/blog/2019/1/chiavari-1.jpg"
            alt="wedding-1"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            className="center"
            src="https://www.rossiniweddings.com/wp-content/uploads/2019/01/be30898f1123fcf2653fb8a9363e19e6.jpg"
            alt="wedding-2"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            className="center"
            src="https://static.aislesociety.com/nashville-bride-guide/fall-wedding-autumn-crest-farm/thumb_8eb5ed7b-67b1-3e7e-ab6c-fcadaeaa85b3.jpg"
            alt="wedding-3"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            className="center"
            src="https://premiereeventsonline.com/wp-content/uploads/2021/12/Durbin-Wedding-579.jpg"
            alt="wedding-4"
          />
        </h3>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
