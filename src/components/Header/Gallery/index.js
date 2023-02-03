import React, { useRef, useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./styles.css";

function Gallery() {
  const [cols, setCols] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    setCols(window.innerWidth < 786 ? 1 : 3);
  }, [imageRef]);

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 className="gallery-title">Photo Gallery</h2>
      <ImageList cols={cols} gap={30}>
        {itemsImages.map((item, index) => (
          <ImageListItem className="gallery-container" key={index}>
            <img
              className="gallery-photo"
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.text}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemsImages = [
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/DSC00343.JPG",
  },
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5368.PNG",
  },
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5341.JPG",
  },
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5348.JPG",
  },
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5362.JPG",
  },
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/DSC00136.JPG",
  },
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5369.PNG",
  },
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5509.JPG",
  },
  {
    img: "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5352.JPG",
  },
];

export default Gallery;
