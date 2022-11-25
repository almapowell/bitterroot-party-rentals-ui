import React, { useRef, useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import './styles.css';
  
function Gallery() {
    const [cols, setCols] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        setCols(window.innerWidth < 786 ? 1 : 3);
    }, [imageRef]);


    return (
        <div style={{width: '80%', margin: 'auto'}}>
            <h2 className="gallery-title">Photo Gallery</h2>
            <ImageList cols={cols} gap={20}>
            {itemsImages.map((item, index) => (
                <ImageListItem className="gallery-container" key={index}>
                <img
                    className="gallery-photo"
                    src={item.img}
                    alt={item.text}
                    loading="lazy"
                    />
                <div class="middle">
                    <div class="gallery-text">{item.text}'s Wedding</div>
                </div>
                </ImageListItem>
            ))}
            </ImageList>
        </div>
    );
}

const itemsImages = [
    {
        img: "https://drive.google.com/uc?export=view&id=1XJwH1NnZ1645F_il5YYYFKntB2OLlNvv",
        text: 'John & Eliza'
    },
    {
        img: "https://drive.google.com/uc?export=view&id=1aDKA5QoRBTHmOu5hgswcagDQ0iePKRNY",
        text: 'Someone Random'
    },
    {
        img: "https://drive.google.com/uc?export=view&id=1viglfl2V1XKthyRFaFQhPahNExwUd-RX",
        text: 'Someone Random'
    },
    {
        img: "https://drive.google.com/uc?export=view&id=1S84VOzz3trPFshR7XFoS7QUO1TJ-yC0E",
        text: 'Dakota & Taylor'
    },
    {
        img: "https://drive.google.com/uc?export=view&id=1cGTQBrLr4Aneh8CW4SE6g9WGoMZuvM5V",
        text: 'Dakota & Taylor'
    },
    {
        img: "https://drive.google.com/uc?export=view&id=1TmMjUi9Q56iDwvcvf1nhMaAqkrRvFi49",
        text: 'Johnny & Eliza'
    },
    {
        img: "https://drive.google.com/uc?export=view&id=1ck-euKuuFTgAL_RGY3x_zujBkKO3KPKN",
        text: 'Someone Random'
    },
    {
        img: "https://drive.google.com/uc?export=view&id=1HisUWEJ2MQTl_YJCYQnBMwv5DD2qLicJ",
        text: 'Dakota & Taylor'
    },
    {
        img: "https://drive.google.com/uc?export=view&id=17pf47SRWozmjLdN2Jl0KnMDwWXLHGqJo",
        text: 'Dakota & Taylor'
    }


    
];
  
export default Gallery;